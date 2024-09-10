import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./features/Portfolio/reposSlice";
import themeReducer from "./common/ThemeToggler/themeSlice";
import rootSaga from "./rootSaga";

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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
