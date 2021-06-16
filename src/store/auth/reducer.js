import createReducer from "../../utils/createReducer";
import {
  SET_TOKEN
} from "./constants";

const initialState = {
  token: '',
};

const setToken = (state, { token }) => ({
  ...state,
  token
});

const strategyMap = {
  [SET_TOKEN]: setToken,
};

const authReducer = createReducer(strategyMap, initialState);

export default authReducer;