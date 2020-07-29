const STORE_TYPE_ADDRESS = 'address';
const STORE_TYPE_ROUTE = 'route';

export const GET_ADDRESS = `${STORE_TYPE_ADDRESS}/GET_ADDRESS`;
export const GET_ADDRESS_SUCCESS = `${STORE_TYPE_ADDRESS}/GET_ADDRESS_SUCCESS`;
export const GET_ADDRESS_FAILURE = `${STORE_TYPE_ADDRESS}/GET_ADDRESS_FAILURE`;

export const GET_ROUTE = `${STORE_TYPE_ROUTE}/GET_ROUTE`;
export const GET_ROUTE_SUCCESS = `${STORE_TYPE_ROUTE}/GET_ROUTE_SUCCESS`;
export const GET_ROUTE_FAILURE = `${STORE_TYPE_ROUTE}/GET_ROUTE_FAILURE`;

export const getAddress = (payload) => {
    return {
        type: GET_ADDRESS,
        payload
    };
};

export const getAddressSuccess = (payload) => {
    const createObjectAddresses = () => payload.map(item => ({ value: item, label: item }));

    return {
        type: GET_ADDRESS_SUCCESS,
        payload: createObjectAddresses()
    };
};

export const getAddressFailure = () => {
    return {
        type: GET_ADDRESS_FAILURE
    };
};

export const getRoute = (payload) => {
    return {
        type: GET_ROUTE,
        payload
    };
};

export const getRouteSuccess = (payload) => {
    return {
        type: GET_ROUTE_SUCCESS,
        payload
    };
};

export const getRouteFailure = () => {
    return {
        type: GET_ROUTE_FAILURE
    };
};

