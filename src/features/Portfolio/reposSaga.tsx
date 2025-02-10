import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "./getRepos";
import { fetchReposFailure, fetchReposSuccess, setRepos } from "./reposSlice";
import { Repo } from "../../types/types";

type ReposResponse = Repo[];

export function* fetchReposHandler(): Generator {
  try {
    yield delay(1000); // just to show loading view
    const reposData: ReposResponse = (yield call(getRepos)) as Repo[];
    yield put(fetchReposSuccess(reposData));
  } catch (error) {
    yield put(fetchReposFailure((error as Error).message || "Unknown error"));
  }
}

export function* watchFetchRepos(): Generator {
  yield takeLatest(setRepos.type, fetchReposHandler);
}
