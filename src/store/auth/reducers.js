import { LOADING } from "../sharedConstants";
import { LOG_IN_SUCCESS, LOG_IN_FAILURE } from "./actions";

const initialState = {
    isLoading: false,
    isAuthorize: false
};

export const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOADING:
            return { ...state, isLoading: true };
        case LOG_IN_SUCCESS:
            return { ...state, isAuthorize: true, isLoading: false };
        case LOG_IN_FAILURE:
            return { ...state, isAuthorize: false, isLoading: false };
        default:
            return state;
    };
};