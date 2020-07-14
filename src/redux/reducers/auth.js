import * as types from "../types";

const initialState = {
    isLoading: false,
    isAuthorize: false
};

export const auth = (state = initialState, actions) => {
    switch (actions.type) {
        case types.LOADING:
            return { ...state, isLoading: true };
        case types.LOG_IN_SUCCESS:
            return { ...state, isAuthorize: true, isLoading: false };
        case types.LOG_IN_FAILURE:
            return { ...state, isAuthorize: false, isLoading: false };
        case types.LOG_OUT:
            return { ...state, isAuthorize: false };
        default:
            return state;
    };
};