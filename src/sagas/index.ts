import { put, call, takeEvery } from "redux-saga/effects";
const fetchData = function (delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("ok"), delay);
  });
};
const workerSaga = function* () {
  yield call(fetchData, 2000);
  yield put({
    type: "LOGIN",
  });
};
const rootSaga = function* () {
  yield takeEvery("LOGIN", workerSaga);
};
export default rootSaga;
