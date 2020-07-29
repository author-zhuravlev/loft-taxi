import {
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    CHECK_IS_AUTH,
    LOG_OUT,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "./actions";

const initialState = {
  isLoading: false,
  isAuthorize: false,
  userData: {}
};

export const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOG_IN:
            return { ...state, isLoading: true };
        case LOG_IN_SUCCESS:
            return { ...state, isAuthorize: true, isLoading: false };
        case LOG_IN_FAILURE:
            return { ...state, isAuthorize: false, isLoading: false };
        case CHECK_IS_AUTH:
            const data = JSON.parse(localStorage.getItem("userToken"));

            if (data && data.token) {
                return { ...state, isAuthorize: true, userData: data.user };
            } else {
                return { ...state, isAuthorize: false };
            }
        case LOG_OUT:
            return { ...state, isAuthorize: false };
        case REGISTER:
            return { ...state, isLoading: true };
        case REGISTER_SUCCESS:
            return { ...state, isAuthorize: true, isLoading: false };
        case REGISTER_FAILURE:
            return { ...state, isAuthorize: false, isLoading: false };
        default:
            return state;
    }
};