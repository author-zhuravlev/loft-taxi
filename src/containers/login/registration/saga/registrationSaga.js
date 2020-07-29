import { takeLatest, call, put } from 'redux-saga/effects';
import { registerSuccess, registerFailure, REGISTER } from '../../store/actions';
import { api } from '../../../../utils/api';

function* registerWorker(actions) {
    const { payload } = actions;
    const fetchRegister = () => api.post('/register', payload);

    try {
        const { data } = yield call(fetchRegister);

        if (!data || !data.success) {
            throw new Error(data.error);
        }

        localStorage.setItem('userToken', JSON.stringify({ ...data, user: payload }));

        yield put(registerSuccess(data));
    } catch (error) {
        yield put(registerFailure());
        console.error(error.message);
    }
}

export function* registerSaga() {
    yield takeLatest(REGISTER, registerWorker);
}