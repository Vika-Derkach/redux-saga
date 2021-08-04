import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  decrementCreator,
  incrementCreator,
} from "../store/countReducer";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function* increaseWorker() {
  yield delay(1000);
  // це не виповниться якщо не виповниться асинхрона дія з yield
  yield put(incrementCreator());
}
function* decreaseWorker() {
  yield delay(1000);
  // це не виповниться якщо не виповниться асинхрона дія з yield
  yield put(decrementCreator());
}
export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, increaseWorker);
  yield takeEvery(ASYNC_DECREMENT, decreaseWorker);
}
