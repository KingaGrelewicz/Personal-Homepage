import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepos } from './getRepos';
import { fetchReposFailure, fetchReposStart, fetchReposSuccess } from "./reposSlice";

export function* fetchReposHandler() {
    try {   
        yield put(fetchReposStart());
        yield delay(1000);
        const reposData = yield call(getRepos);
        yield put(fetchReposSuccess(reposData.data));
    } catch (error) {
        yield put(fetchReposFailure("ups"));
    }
}

export function* watchFetchRepos() {
    yield takeLatest('repos/fetchRepos', fetchReposHandler);
}