import { combineReducers } from "redux";
import * as AllReducer from "../Store/_redux/AllReducer";
//import { all } from "redux-saga/effects";

export const rootReducer = combineReducers({
  auth: AllReducer.authReducer,
  item: AllReducer.itemReducer,
});
export default rootReducer