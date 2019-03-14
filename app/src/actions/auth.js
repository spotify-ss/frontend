import axios from 'axios';
import { ERROR } from './shared';

export const LOGOUT = 'LOGOUT';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const loggingIn = (login, password) => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/users/login', {
      username: login,
      password: password
    })
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userID', res.data.userID);
      // (function() {
      //   const token = res.data.token;
      //   if (token) {
      //     axios.defaults.headers.common['Authorization'] = token;
      //   } else {
      //     axios.defaults.headers.common['Authorization'] = null;
      //     /*if setting null does not remove `Authorization` header then try
      //      delete axios.defaults.headers.common['Authorization'];
      //    */
      //   }
      // })();
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};

export const loggingOut = () => {
  localStorage.clear();
  return {
    type: LOGOUT
  };
};

export const signingUp = (login, password) => dispatch => {
  dispatch({
    type: SIGNUP_START
  });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/users/register', {
      username: login,
      password: password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userID', res.data.userID);
      dispatch({
        type: SIGNUP_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
