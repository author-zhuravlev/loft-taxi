import {
    PAYMENT,
    PAYMENT_SUCCESS,
    PAYMENT_FAILURE,
    CHECK_IS_CARD_DATA
} from './actions';

const initialState = {
    isLoading: false,
    isCardData: false,
    cardData: {},
};

export const paymentReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case PAYMENT:
            return { ...state, isLoading: true };
        case PAYMENT_SUCCESS:
            return { ...state, isCardData: true, isLoading: false };
        case PAYMENT_FAILURE:
            return { ...state, isCardData: false, isLoading: false };
        case CHECK_IS_CARD_DATA:
            const cardData = JSON.parse(localStorage.getItem("userCard"));

            if (cardData) {
                return { ...state, isCardData: true, cardData };
            } else {
                return { ...state, isCardData: false };
            }
        default:
            return state;
    }
};