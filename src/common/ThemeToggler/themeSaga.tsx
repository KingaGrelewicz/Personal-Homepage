import { select, takeEvery } from "redux-saga/effects";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { SagaIterator } from 'redux-saga';

function* saveThemeInLocalStorageHandler(): SagaIterator {
    const isDarkTheme: boolean = yield select(selectIsDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

export function* watchSaveThemeInLocalStorage(): SagaIterator {
    yield takeEvery(toggleTheme.type, saveThemeInLocalStorageHandler);
}