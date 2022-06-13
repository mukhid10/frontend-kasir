import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./combineReducers";

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

export default store;
