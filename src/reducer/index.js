import { combineReducers } from "redux";
import authReducer from "./auth";
import usersReducer from "./users";
import profilesReducer from "./profile";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  profiles: profilesReducer,
});
