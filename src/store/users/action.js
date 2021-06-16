import {
  SET_USERS_DATA,
  FILTER_USERS_BY_NAME,
  SORT_USERS_BY_ID
} from './constants';
import axios from '../../axiosConfig';

export const getUsersData = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/users/');
    const users = res.data;
    
    dispatch(setUsers(users));
  }
  catch (e) {
    console.log('err', e);
  }
};

const setUsers = (users) => ({
  type: SET_USERS_DATA,
  users
});

export const filterUsersByName = (value) => ({
  type: FILTER_USERS_BY_NAME,
  value
});

export const sortUsersById = () => ({
  type: SORT_USERS_BY_ID
})