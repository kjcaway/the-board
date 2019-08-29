import *  as Actions from '../actions/boardActions';

const initialState = {
}

export const reducer = (state=initialState, action: Actions.BoardActionType) => {
  switch(action.type){
    case Actions.GETBOARD:
      return {
        ...state,
        status: 'LOADING',
        payload: action.payload
      }
    case Actions.GETBOARD_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        data: action.data
      }
    case Actions.GETBOARD_FAIL:
      return {
        ...state,
        status: 'FAIL',
        error: action.error
      }
    default:
      return state;
  }
}