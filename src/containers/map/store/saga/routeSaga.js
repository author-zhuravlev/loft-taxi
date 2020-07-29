import { takeLatest, call, put } from 'redux-saga/effects';
import { getRouteSuccess, getRouteFailure, GET_ROUTE } from '../actions';
import { api } from '../../../../utils/api';

function* routeWorker(actions) {
    const { payload } = actions;
    const fetchLogin = () => api.get(`/route?address1=${payload.address1}&&address2=${payload.address2}`);

    try {
        const { data }  = yield call(fetchLogin);

        if (!data) {
            throw new Error('Не удалось загрузить маршрут');
        }

        yield put(getRouteSuccess(data));
    } catch (error) {
        yield put(getRouteFailure());
        console.error(error.message);
    }
};

export function* routeSaga() {
    yield takeLatest(GET_ROUTE, routeWorker);
}