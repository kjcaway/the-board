import { call, put, takeEvery } from "redux-saga/effects";
import defaultClient from "../../lib/defaultClient";
import * as BoardActions from "../actions/boardActions";
import * as CommonActions from "../actions/commonActions"

function* fetchBoardSaga(action: BoardActions.BoardActionType) {
  // try catch finally 구문으로 오류 제어
  try {
    const { data } = yield call([defaultClient, 'get'], '/api/contents/', {
      params: {
        where: {
          category : '00'
        }
      }
    })
    yield put(BoardActions.getBoardSuccess(data.data));
  } catch (error) {
    yield put(BoardActions.getBoardFail(error.response));
    yield put(CommonActions.pushMessage({
      message: '불러오기 실패하였습니다.',
      category: 'error'
    }))
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
    yield put(BoardActions.writeBoardSuccess(data.data));
    yield put(CommonActions.pushMessage({
      message: '등록 되었습니다!',
      category: 'success'
    }))
  } catch (error) {
    yield put(BoardActions.writeBoardFail(error.response));
    yield put(CommonActions.pushMessage({
      message: '등록 실패하였습니다.',
      category: 'error'
    }))
  }
}

export default function* watchBoard() {
  // type의 action이 실행되면 fetchBoardSaga도 항상(Every) 실행한다
  yield takeEvery(BoardActions.GETBOARD, fetchBoardSaga);
  yield takeEvery(BoardActions.WRITEBOARD, writeBoardSaga);
}

