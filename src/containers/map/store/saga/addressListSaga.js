import { takeLatest, call, put } from 'redux-saga/effects';
import { getAddressSuccess, getAddressFailure, GET_ADDRESS } from '../actions';
import { api } from '../../../../utils/api';

function* addressListWorker() {
    const fetchLogin = () => api.get('/addressList');

    try {
        const { data: {addresses} }  = yield call(fetchLogin);

        if (!addresses) {
            throw new Error('Не удалось загрузить адреса');
        }

        yield put(getAddressSuccess(addresses));
    } catch (error) {
        yield put(getAddressFailure());
        console.error(error.message);
    }
};

export function* addressListSaga() {
    yield takeLatest(GET_ADDRESS, addressListWorker);
}