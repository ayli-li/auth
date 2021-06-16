import {
  SET_TOKEN
} from './constants';
import axios from '../../axiosConfig';

export const getToken = (login, password) => async (dispatch) => {
  try {
    const res = await axios.post(`/api-token-auth/`, { username: login, password: password } );
    console.log(res);
    const token = res.data.token;
    
    localStorage.setItem('auth-token', token);
    dispatch(setToken(token));
  }

  catch (err) {
    console.log('err', err);
  }
};

export const setToken = (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;

  return ({
    type: SET_TOKEN,
    token
  });
};

export const logOut = () => (dispatch) => {
  dispatch(setToken(''));
  localStorage.removeItem('auth-token');
  delete axios.defaults.headers.Authorization;
};