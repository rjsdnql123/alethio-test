import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import login from './loginForm/loginSlice'
import loginSaga from './loginForm/saga'

function* rootSaga() {
    yield all([loginSaga()])
}

const rootReducer = combineReducers({
    login
})

function createStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [sagaMiddleware]
    });
    sagaMiddleware.run(rootSaga)
    return store;
}

export default createStore
