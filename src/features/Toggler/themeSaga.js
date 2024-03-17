import { select, takeEvery } from "redux-saga/effects";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
    const isDarkTheme = yield select(selectIsDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

export function* watchSaveThemeInLocalStorage() {
    yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
}