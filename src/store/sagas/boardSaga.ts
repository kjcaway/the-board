import { call, put, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions/boardActions";
import defaultClient from "../../lib/defaultClient";

function* fetchBoardSaga(action: Actions.BoardActionType) {
  // try catch finally 구문으로 오류 제어
  try {
    const { data } = yield call([defaultClient, 'get'], '/api/contents/', {
      params: {
        where: {
          category : '00'
        }
      }
    })
    console.log('fetchBoardSaga call success. result')
    console.log(data)
    yield put(Actions.getBoardSuccess(data.data));
  } catch (error) {
    yield put(Actions.getBoardFail(error.response));
  }
}

function* writeBoardSaga(action: any) {
  try {
    const formData = new FormData();
    formData.append('title', action.payload.title);
    formData.append('contents', action.payload.contents);
    formData.append('category', '00');
    formData.append('writer', 'testtesttest');

    const { data } = yield call([defaultClient, 'post'], '/api/contents/', formData)
    console.log('writeBoardSaga call success. result')
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

