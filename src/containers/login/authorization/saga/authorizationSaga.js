import { takeLatest, call, put } from 'redux-saga/effects';
import { logInSuccess, logInFailure, LOG_IN } from '../../store/actions';
import { api } from '../../../../utils/api';

function* loginWorker(actions) {
    const { payload } = actions;
    const fetchLogin = () => api.post('/auth', payload);

    try {
        const { data } = yield call(fetchLogin);

        if (!data || !data.success) {
            throw new Error(data.error);
        }

        localStorage.setItem('userToken', JSON.stringify({ ...data, user: payload }));

        yield put(logInSuccess(data));
    } catch (error) {
        yield put(logInFailure());
        console.error(error.message);
    }
};

export function* loginSaga() {
    yield takeLatest(LOG_IN, loginWorker);
}
