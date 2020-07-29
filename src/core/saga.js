import { all } from 'redux-saga/effects';
import { loginSaga } from '../containers/login/authorization/saga/authorizationSaga';
import { registerSaga } from '../containers/login/registration/saga/registrationSaga';
import { paymentSaga } from '../containers/profile/store/saga/paymentSaga';
import { addressListSaga } from '../containers/map/store/saga/addressListSaga';
import { routeSaga } from '../containers/map/store/saga/routeSaga';

export function* rootSaga() {
    yield all([
        loginSaga(),
        registerSaga(),
        paymentSaga(),
        addressListSaga(),
        routeSaga()
    ]);
}