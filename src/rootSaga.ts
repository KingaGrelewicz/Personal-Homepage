import { all } from "redux-saga/effects";
import { watchSaveThemeInLocalStorage } from "./common/ThemeToggler/themeSaga";
import { watchFetchRepos } from "./features/Portfolio/reposSaga";

export default function* rootSaga() {
    yield all([
        watchSaveThemeInLocalStorage(),
        watchFetchRepos(),
    ]);
}