import createReducer from "../../utils/createReducer";
import {
  SET_USERS_DATA,
  FILTER_USERS_BY_NAME,
  SORT_USERS_BY_ID
} from "./constants";

const initialState = {
  users: [],
  filteredUsers: []
};

const setUsers = (state, { users }) => ({
  ...state,
  users
});

const filterUsersByName = (state, { value }) => ({
  ...state,
  filteredUsers: [...state.users.filter(({ username }) => username.toLowerCase().includes(value.toLowerCase() ))] 
});

const sortUsersById = (state) => ({
  ...state,
  filteredUsers: [...state.filteredUsers.sort((a, b) => a.id - b.id)]
});

const strategyMap = {
  [SET_USERS_DATA]: setUsers,
  [FILTER_USERS_BY_NAME]: filterUsersByName,
  [SORT_USERS_BY_ID]: sortUsersById
};

const usersReducer = createReducer(strategyMap, initialState);

export default usersReducer;