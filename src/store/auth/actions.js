import { requestLogin } from './request';

export const LOG_IN_SUCCESS = 'login/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'login/LOG_IN_FAILURE';

export const logIn = (user) => {
    return async dispatch => {
        const response = await requestLogin(user, dispatch);

        if (response && response.success) {
            localStorage.setItem('userToken', JSON.stringify({
                ...response,
                user
            }));
            
            dispatch({ type: LOG_IN_SUCCESS, payload: response });
        }
    };
};