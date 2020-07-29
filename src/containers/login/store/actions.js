const STORE_TYPE_AUTH = 'login';
const STORE_TYPE_REGISTER = 'registration';

export const CHECK_IS_AUTH = `${STORE_TYPE_AUTH}/CHECK_IS_AUTH`;
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = `${STORE_TYPE_AUTH}/LOG_IN_SUCCESS`;
export const LOG_IN_FAILURE = `${STORE_TYPE_AUTH}/LOG_IN_FAILURE`;
export const LOG_OUT = `${STORE_TYPE_AUTH}/LOG_OUT`;

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = `${STORE_TYPE_REGISTER}/REGISTER_SUCCESS`;
export const REGISTER_FAILURE = `${STORE_TYPE_REGISTER}/REGISTER_FAILURE`;

export const logIn = (payload) => {
    return {
        type: LOG_IN,
        payload
    }
};

export const logInSuccess = (payload) => {
    return {
        type: LOG_IN_SUCCESS,
        payload
    };
};

export const logInFailure = () => {
    return {
        type: LOG_IN_FAILURE,
    };
};

export const logOut = () => {
    localStorage.clear();

    return {
        type: LOG_OUT
    };
};

export const checkIsAuth = () => ({
    type: CHECK_IS_AUTH,
});

export const register = (payload) => {
    return {
        type: REGISTER,
        payload
    };
};

export const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    };
};

export const registerFailure = () => {
    return {
        type: REGISTER_FAILURE,
    };
};
