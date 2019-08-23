import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  () => {}, // reducer required
  applyMiddleware(sagaMiddleware)
)
// saga run required
export {history};
export default store;