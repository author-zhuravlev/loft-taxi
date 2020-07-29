import {
    GET_ADDRESS,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAILURE,
    GET_ROUTE,
    GET_ROUTE_SUCCESS,
    GET_ROUTE_FAILURE
} from './actions';

const initialState = {
    isLoading: false,
    isAddressData: false,
    addresses: [],
    routes: []
};

export const addressReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ADDRESS:
            return { ...state, isLoading: true };
        case GET_ADDRESS_SUCCESS:
            return { ...state, isAddressData: true, isLoading: false, addresses: actions.payload };
        case GET_ADDRESS_FAILURE:
            return { ...state, isAddressData: false, isLoading: false };
        case GET_ROUTE:
            return { ...state, isLoading: true };
        case GET_ROUTE_SUCCESS:
            return { ...state, isLoading: false, routes: actions.payload };
        case GET_ROUTE_FAILURE:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};