import React from "react";
import PropTypes from "prop-types";
import {ARTIST, GENRE} from "../../const.js";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Mistakes from "../mistakes/mistakes.jsx";
import {getMistakes} from "../../selectors/game/game";
import {goToWelcome} from "../../actions/action-creators/game/game.js";
import {AppRoute} from "../../const.js";

const GameScreen = (props) => {
  const {
    type,
    children,
    onGoToWelcome,
    mistakes
  } = props;

  return (
    <section className={`game game--${type}`}>
      <header className="game__header">
        <Link
          className="game__back"
          to={AppRoute.ROOT}
          onClick={onGoToWelcome}
        >
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <Mistakes
          count={mistakes}
        />
      </header>

      {children}
    </section>
  );
};


GameScreen.propTypes = {
  type: PropTypes.oneOf([ARTIST, GENRE]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onGoToWelcome: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGoToWelcome() {
    dispatch(goToWelcome());
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
