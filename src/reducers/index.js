import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";

const appReducers = combineReducers({
    AuthenticationReducer,
});
export default appReducers;