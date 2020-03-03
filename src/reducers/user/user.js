import {REQUIRED_AUTHORIZATION} from '../../actions/types/user';
import {AUTH} from '../../const';

const initialState = {
  authorizationStatus: AUTH,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};
