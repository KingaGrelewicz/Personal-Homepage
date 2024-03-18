import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepos } from './getRepos';
import { fetchReposFailure, fetchReposStart, fetchReposSuccess, setRepos } from "./reposSlice";

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
    yield takeLatest(setRepos.type, fetchReposHandler);
}