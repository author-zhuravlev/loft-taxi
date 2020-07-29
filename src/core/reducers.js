import { combineReducers } from "redux";
import { authReducer } from "../containers/login/store/reducers";
import { paymentReducer } from '../containers/profile/store/reducers';
import { addressReducer } from '../containers/map/store/reducers';

export default combineReducers({
    authReducer,
    paymentReducer,
    addressReducer
});
