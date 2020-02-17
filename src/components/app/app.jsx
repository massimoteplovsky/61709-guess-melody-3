import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import {GameType} from "../../const.js";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";

const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    const {mistakeQuantity, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameScreen>
          );
      }
    }

    return (
      <WelcomeScreen
        mistakeQuantity={mistakeQuantity}
        onWelcomeButtonClick={() => {
          this.setState({
            step: 0
          });
        }}
      />
    );
  }

  render() {
    const {questions} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <ArtistQuestionScreenWrapped
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GenreQuestionScreenWrapped
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </Router>
    );
  }

}

App.propTypes = {
  mistakeQuantity: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
