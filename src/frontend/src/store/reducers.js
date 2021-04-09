import { combineReducers } from "redux";
import users from "../modules/user/store/reducer";
import employees from "../modules/employee/store/reducer";

const reducers = combineReducers({
  users,
  employees,
});

export default reducers;
