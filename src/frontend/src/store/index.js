import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middleswareEnhancer = applyMiddleware(...[thunkMiddleware]);
const enhancers = [middleswareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const initState = {
  users: {},
};

const store = createStore(reducers, initState, composedEnhancers);

export default store;
