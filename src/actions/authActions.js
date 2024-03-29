import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../utils/setAuthToken';
import { URL } from '../config';

export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${URL}/auth/register`, userData)
    .then(response => {
      response.ok
        ? history.push('/login')
        : dispatch({
            type: GET_ERRORS,
            payload: response.message,
          });
    })
    .catch(response =>
      dispatch({
        type: GET_ERRORS,
        payload: response.message,
      }),
    );
};

export const loginUser = userData => dispatch => {
  axios
    .post(`${URL}/auth/login`, userData)
    .then(res => {
      const token = res.data.data.tokens.accessToken;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(setCurrentUser(res.data.data.user));
    })
    .catch(err => {
      const errors = err.response.data.errors;
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
