import { call, put, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions/commonActions";

function * pushMessageSaga(action: any){
  yield put(Actions.pushMessage({
    payload: action.payload
  }))
}
