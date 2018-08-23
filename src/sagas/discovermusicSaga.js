import { takeEvery, put, fork } from 'redux-saga/effects';
import {
  API_REQUEST,
  QUERY_BANNER,
  QUERY_PERSONALIZED_PRIVATECONTENT,
} from '../constants/actionTypes';

/*
**************************** Subroutines ***********************************
*/

function* fetchApiSaga(action) {
  yield put({
    ...action,
    type: API_REQUEST,
  });
}

/*
****************************** WATCHERS ************************************
*/

function* watchFetchBanner() {
  yield takeEvery(QUERY_BANNER, fetchApiSaga);
}
function* watchFetchPersonalizedPrivatecontent() {
  yield takeEvery(QUERY_PERSONALIZED_PRIVATECONTENT, fetchApiSaga);
}

const discovermusicSagas = [
  fork(watchFetchBanner),
  fork(watchFetchPersonalizedPrivatecontent),
];

export default discovermusicSagas;
