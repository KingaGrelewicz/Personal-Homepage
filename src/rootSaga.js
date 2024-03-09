import { all } from "redux-saga/effects";
import { watchSaveThemeInLocalStorage } from "./features/Toggler/themeSaga";
import { watchFetchRepos } from "./features/Portfolio/reposSaga";

export default function* rootSaga() {
    yield all([
        watchSaveThemeInLocalStorage(),
        watchFetchRepos(),
    ]);
}