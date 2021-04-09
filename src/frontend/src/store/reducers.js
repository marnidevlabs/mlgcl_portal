import { combineReducers } from "redux";
import users from "../modules/user/store/reducer";

const reducers = combineReducers({
  users,
});

export default reducers;
