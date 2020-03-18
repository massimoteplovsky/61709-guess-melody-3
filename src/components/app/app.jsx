import React, {PureComponent} from "react";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import AuthScreen from "../auth-screen/auth-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import GameOverScreen from "../game-over-screen/game-over-screen.jsx";
import WinScreen from "../win-screen/win-screen.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {ARTIST, GENRE} from "../../const.js";
import {incrementMistake, incrementStep, resetGame} from "../../actions/action-creators/game/game";
import withActivePlayer from "../../hocs/with-audio-player/with-audio-player.js";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.js";

import {getStep, getMistakes, getMaxMistakes} from "../../selectors/game/game";
import {getQuestions} from "../../selectors/data/data";
import {getAuthorizationStatus} from "../../selectors/user/user";
import {login} from "../../actions/action-creators/user/user";
import {AUTH, NO_AUTH} from "../../const";
import history from "../../history.js";
import {AppRoute} from "../../const.js";

const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

class App extends PureComponent {

  _renderGameScreen() {
    const {
      authorizationStatus,
      maxMistakes,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      mistakes,
      step,
    } = this.props;
    const question = questions[step];

    if (mistakes >= maxMistakes) {
      return history.push(AppRoute.LOSE);
    }

    if (step >= questions.length) {
      if (authorizationStatus === AUTH) {
        return history.push(AppRoute.RESULT);
      } else if (authorizationStatus === NO_AUTH) {
        return history.push(AppRoute.LOGIN);
      }

      return null;
    }

    if (question) {
      switch (question.type) {
        case ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return (
      <WelcomeScreen
        errorsCount={maxMistakes}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
    );
  }

  render() {
    const {questions, mistakes, onResetGame, onLogin} = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderGameScreen()}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <AuthScreen
              onReplayButtonClick={onResetGame}
              onSubmit={onLogin}
            />
          </Route>
          <Route exact path={AppRoute.LOSE}>
            <GameOverScreen
              onReplayButtonClick={onResetGame}
            />
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.RESULT}
            render={() => {
              return (
                <WinScreen
                  questionsCount={questions.length}
                  mistakesCount={mistakes}
                  onReplayButtonClick={onResetGame}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }

}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onResetGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  maxMistakes: getMaxMistakes(state),
  questions: getQuestions(state),
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(login(authData));
  },
  onWelcomeButtonClick() {
    dispatch(incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(incrementStep());
    dispatch(incrementMistake(question, answer));
  },
  onResetGame() {
    dispatch(resetGame());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
