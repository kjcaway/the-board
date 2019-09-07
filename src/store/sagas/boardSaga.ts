import { call, put, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions/boardActions";
import axios from "axios";

function* fetchBoardSaga(action: Actions.BoardActionType) {
  // try catch finally 구문으로 오류 제어
  try {
    const { data } = yield call([axios, 'get'], '/api/contents/', {
      params: {
        where: {}
      }
    })
    console.log('yield call result')
    console.log(data)
    yield put(Actions.getBoardSuccess(data.data));
  } catch (error) {
    yield put(Actions.getBoardFail(error.response));
  }
}

function* writeBoardSaga(action: Actions.BoardActionType) {
  try {
    const { data } = yield call([axios, 'post'], '/api/contents/', {
      params: {
        where: {}
      }
    })
    console.log('yield call result')
    console.log(data)
    yield put(Actions.writeBoardSuccess(data.data));
  } catch (error) {
    yield put(Actions.writeBoardFail(error.response));
  }
}

export default function* watchBoard() {
  // type의 action이 실행되면 fetchBoardSaga도 항상(Every) 실행한다
  yield takeEvery(Actions.GETBOARD, fetchBoardSaga);
  yield takeEvery(Actions.WRITEBOARD, writeBoardSaga);
}

