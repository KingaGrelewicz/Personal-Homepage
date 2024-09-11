import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "./getRepos";
import {
  fetchReposFailure,
  fetchReposSuccess,
  setRepos,
} from "./reposSlice";

export function* fetchReposHandler() {
  try {
    yield delay(1000); // just to show loading view
    const reposData = yield call(getRepos);
    console.log(reposData);
    yield put(fetchReposSuccess(reposData));
  } catch (error) {
    yield put(fetchReposFailure());
  }
}

export function* watchFetchRepos() {
  yield takeLatest(setRepos.type, fetchReposHandler);
}
