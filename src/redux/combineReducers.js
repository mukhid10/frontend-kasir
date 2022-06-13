import { combineReducers } from "redux";
import { getProductReducers } from "./reducers/productReducer";
import { cartReducers } from "./reducers/cartReducers";

const rootReducers = combineReducers({ getProductReducers, cartReducers });

export default rootReducers;
