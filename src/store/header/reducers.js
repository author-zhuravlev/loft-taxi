import { LOADING } from "../sharedConstants";
import { LOG_OUT } from "./actions";

const initialState = {
    isLoading: false,
    isAuthorize: true
};

export const mapReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOADING:
            return { ...state, isLoading: true };
        case LOG_OUT:
            return { ...state, isAuthorize: false };
        default:
            return state;
    };
};