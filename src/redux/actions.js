import * as types from "./types";
import { requestLogin } from './request';

export const logIn = (user) => {
    return async dispatch => {
        const response = await requestLogin(user, dispatch);

        if (response && response.success) {
            localStorage.setItem('userToken', JSON.stringify({
                ...response,
                user
            }));
            
            dispatch({ type: types.LOG_IN_SUCCESS, payload: response });
        }
    };
};

export const logOut = () => {
    localStorage.removeItem('userToken');

    return { type: types.LOG_OUT };
};