import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import {  loginaction, setToken, loginError } from "./loginSlice";
import loginApi from '../../util/loginApi'

function* login() {
  try {
    const { token } = yield call(loginApi);
    yield put(setToken(token));
  } catch (e) {
    yield put(loginError(e));
  }
}

function* watchLogin() {
  yield takeLatest(loginaction, login);
}

export default function* loginSaga() {
  yield all([fork(watchLogin)]);
}
