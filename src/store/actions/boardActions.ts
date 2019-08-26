import {
  GetBoardPayload,
  GetBoardData
} from '../types/boardTypes'

export const GETBOARD = 'GETBOARD';
export const GETBOARD_SUCCESS = 'GETBOARD_SUCCESS';
export const GETBOARD_FAIL = 'GETBOARD_FAIL';

export interface BoardActionType {
  type: string;
  payload?: GetBoardPayload;
  data?: GetBoardData;
  error?: any;
}

export function getBoard(payload: GetBoardPayload){
  return {
    type: GETBOARD,
    payload
  }
}

export function getBoardSuccess(data: GetBoardData){
  return {
    type: GETBOARD_SUCCESS,
    data
  }
}

export function getBoardFail(error: any){
  return {
    type: GETBOARD_FAIL,
    error
  }
}

