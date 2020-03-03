import {REQUIRED_AUTHORIZATION} from '../../types/user';
import {AUTH} from '../../../const';

export const requireAuthorization = (status) => {
  return {
    type: REQUIRED_AUTHORIZATION,
    payload: status,
  };
};

export const checkAuth = () => (dispatch, getState, api) => {
  return api.get(`/login`)
    .then(() => {
      dispatch(requireAuthorization(AUTH));
    })
    .catch((err) => {
      throw err;
    });
};

export const login = (authData) => (dispatch, getState, api) => {
  return api.post(`/login`, {
    email: authData.login,
    password: authData.password,
  })
    .then(() => {
      dispatch(requireAuthorization(AUTH));
    });
};
