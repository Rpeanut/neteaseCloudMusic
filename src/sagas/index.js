import { all } from 'redux-saga/effects';

import requestSaga from './requestSaga';
// import discovermusicSagas from './discovermusicSaga';


export default function* rootSaga() {
  yield all([
    requestSaga,
    // ...discovermusicSagas,
  ]);
}
