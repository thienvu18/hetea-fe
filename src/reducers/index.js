import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import UserReducer from "./UserReducer";

const appReducers = combineReducers({
    AuthenticationReducer,
    UserReducer,
});
export default appReducers;