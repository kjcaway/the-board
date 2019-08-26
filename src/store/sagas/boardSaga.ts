import { call, put, takeEvery } from "redux-saga/effects";
import * as Actions from "../actions/boardActions";
import axios from "axios";

function* fetchBoardSaga(action: Actions.BoardActionType) {
    // try catch finally 구문으로 오류 제어
    try {
        const json = {
            name: action.payload
        }
        const { data } = yield call([axios, 'get'], '/api/contents/', {
          params: {
            where: {}
          }
        })
        yield put(Actions.getBoardSuccess(data));
    } catch (error) {
        yield put(Actions.getBoardFail(error.response));
    }
}

export default function* watchBoard() {
    // type의 action이 실행되면 fetchBoardSaga도 항상(Every) 실행한다
    yield takeEvery(Actions.GETBOARD, fetchBoardSaga);
}

