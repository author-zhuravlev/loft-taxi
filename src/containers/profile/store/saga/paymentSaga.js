import { takeLatest, call, put } from 'redux-saga/effects';
import { paymentSuccess, paymentFailure, PAYMENT } from '../actions';
import { api } from '../../../../utils/api';

function* paymentWorker(actions) {
    const { payload } = actions;
    const fetchLogin = () => api.post('/card', payload);

    try {
        const { data } = yield call(fetchLogin);

        if (!data || !data.success) {
            throw new Error(data.error);
        }

        localStorage.setItem('userCard', JSON.stringify({ ...payload }));

        yield put(paymentSuccess(data));
    } catch (error) {
        yield put(paymentFailure());
        console.error(error.message);
    }
};

export function* paymentSaga() {
    yield takeLatest(PAYMENT, paymentWorker);
}