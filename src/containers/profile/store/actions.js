const STORE_TYPE = 'profile';

export const PAYMENT = `${STORE_TYPE}/PAYMENT`;
export const PAYMENT_SUCCESS = `${STORE_TYPE}/PAYMENT_SUCCESS`;
export const PAYMENT_FAILURE = `${STORE_TYPE}/PAYMENT_FAILURE`;
export const CHECK_IS_CARD_DATA = `${STORE_TYPE}/CHECK_IS_CARD_DATA`;

export const payment = (payload) => {
    return {
        type: PAYMENT,
        payload
    }
}

export const paymentSuccess = (payload) => {
    return {
        type: PAYMENT_SUCCESS,
        payload
    };
};

export const paymentFailure = () => {
    return {
        type: PAYMENT_FAILURE
    };
};

export const checkIsCardData = () => ({
    type: CHECK_IS_CARD_DATA,
});