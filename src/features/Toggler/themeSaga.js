import { call, select, takeEvery } from "redux-saga/effects";
import { selectIsDarkTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "../themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectIsDarkTheme);
    yield call(saveThemeInLocalStorage, theme);
}

export function* watchSaveThemeInLocalStorage() {
    yield takeEvery('theme/toggleTheme', saveThemeInLocalStorageHandler);
}