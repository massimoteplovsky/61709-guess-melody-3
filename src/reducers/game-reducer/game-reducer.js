import {extend} from '../../utils';
import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES
} from '../../actions/types/game-action-types';
import questions from "../../mocks/questions";

const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3,
  questions
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      let nextStep = state.step + action.payload;

      if (nextStep >= state.questions.length) {
        return extend({}, initialState);
      }

      return extend(state, {
        step: nextStep
      });

    case INCREMENT_MISTAKES:
      const mistakes = state.mistakes + action.payload;

      if (mistakes >= state.maxMistakes) {
        return extend({}, initialState);
      }

      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
  }

  return state;
};
