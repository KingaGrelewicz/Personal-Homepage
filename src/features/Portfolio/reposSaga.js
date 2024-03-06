import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getRepos } from './getRepos';
import { fetchReposFailure, fetchReposStart, fetchReposSuccess } from "./reposSlice";

export function* fetchReposHandler() {
    try {   
        yield put(fetchReposStart());
        yield delay(1000);
        const reposData = yield call(getRepos);
        yield put(fetchReposSuccess(reposData));
    } catch (error) {
        yield put(fetchReposFailure("ups"));
    }
}

export function* watchFetchRepos() {
    yield takeEvery('repos/fetchRepos', fetchReposHandler);
}