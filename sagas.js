import { put, takeEvery, all, call } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello buorl");
}
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
