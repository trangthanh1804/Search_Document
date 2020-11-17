// reducer góc
import { combineReducers } from "redux";
import courseReducer from "./courses.reducers";
export const rootReducer = combineReducers({
  // reducer cousers , user
  course: courseReducer,
});
