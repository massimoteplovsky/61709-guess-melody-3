import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
  RESET
} from '../../types/game';
import {ARTIST, GENRE} from "../../../const.js";


export const incrementStep = () => ({
  type: INCREMENT_STEP,
  payload: 1,
});

const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.answers[i].genre === question.genre);
  });
};

export const incrementMistake = (question, userAnswer) => {
  let answerIsCorrect = false;

  switch (question.type) {
    case ARTIST:
      answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
      break;
    case GENRE:
      answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
      break;
  }

  return {
    type: INCREMENT_MISTAKES,
    payload: answerIsCorrect ? 0 : 1,
  };
};

export const resetGame = () => {
  return {
    type: RESET,
    payload: null,
  };
};
