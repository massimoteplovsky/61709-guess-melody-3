import {LOAD_QUESTIONS} from '../../actions/types/data';
import {extend} from "../../utils.js";

const initialState = {
  questions: [],
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload,
      });
  }

  return state;
};
