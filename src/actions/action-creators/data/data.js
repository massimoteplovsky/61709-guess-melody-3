import {LOAD_QUESTIONS} from '../../types/data';

const loadQuestionsToState = (questions) => {
  return {
    type: LOAD_QUESTIONS,
    payload: questions,
  };
};

export const loadQuestions = () => (dispatch, getState, api) => {
  return api.get(`/questions`)
    .then((res) => {
      dispatch(loadQuestionsToState(res.data));
    });
};
