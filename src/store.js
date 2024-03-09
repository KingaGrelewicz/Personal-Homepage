import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import reposReducer from'./features/Portfolio/reposSlice';
import themeReducer from './features/Toggler/themeSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        repos: reposReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;