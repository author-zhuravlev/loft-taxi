import * as types from "./types";

export const requestLogin = async (userData, dispatch) => {
    if (userData) {
        userData = JSON.stringify(userData);
    }
    
    try {
        dispatch({ type: types.LOADING });
        const response = await fetch(
            'https://loft-taxi.glitch.me/auth',
            {
                method: 'POST',
                body: userData,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    
        const data = await response.json();
    
        if (!data || !data.success) {
            throw new Error(data.error);
        }

        return data;
    } catch (error) {
        dispatch({ type: types.LOG_IN_FAILURE });
        console.error(error.message);
    }
};