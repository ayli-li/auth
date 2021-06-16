import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  usersData: usersReducer
 });

export default rootReducer;