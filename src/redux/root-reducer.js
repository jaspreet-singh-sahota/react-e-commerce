import { combineReducers } from "redux";
import userReader from "./user/user.reducer";

export default combineReducers({
  user: userReader
})