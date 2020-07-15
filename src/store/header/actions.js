export const LOG_OUT = 'logout/LOG_OUT';

export const logOut = () => {
    localStorage.removeItem('userToken');

    return { type: LOG_OUT };
};