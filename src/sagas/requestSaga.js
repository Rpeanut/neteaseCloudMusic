import { put, call, takeEvery, fork } from 'redux-saga/effects';
import { reqAPI } from '../utils/tools';

/*
**************************** Subroutines ***********************************
*/
function* request(requestAction) {
  const { url, data, callback } = requestAction.payload;
  const actionName = requestAction.type;
  yield put({
    type: `${actionName}_PENDING`,
    payload: {
      data, callback, actionName, uri: url,
    },
  });
  try {
    const res = yield call(reqAPI, url, data);
    if (typeof callback === 'function') {
      callback(res);
    }
    yield put({
      type: `${actionName}_SUCCESS`,
      payload: res,
    });
  } catch (e) {
    // 网络错误 谈一个 toas 提示？？？
    yield put({
      type: `${actionName}_ERROR`,
      payload: { e },
    });
  }
}
/*
****************************** WATCHERS ************************************
*/
const pattern = action => (action.payload || {}).url;
function* watchRequest() {
  yield takeEvery(pattern, request);
}
export default fork(watchRequest);
