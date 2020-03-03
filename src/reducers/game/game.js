import {extend} from '../../utils';
import {
  INCREMENT_STEP,
  INCREMENT_MISTAKES,
  RESET
} from '../../actions/types/game';

const initialState = {
  mistakes: 0,
  step: -1,
  maxMistakes: 3
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload,
      });
    case INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });
    case RESET:
      return extend(initialState, {
        step: 0,
      });
  }

  return state;
};
