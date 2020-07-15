import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { mapReducer } from "./header/reducers";

export default combineReducers({
    authReducer,
    mapReducer
});