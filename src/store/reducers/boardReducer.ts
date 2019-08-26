import *  as Actions from '../actions/boardActions';

const initialState = {
}

export const reducer = (state=initialState, action: Actions.BoardActionType) => {
  switch(action.type){
    case Actions.GETBOARD:
      return {
        ...state,
        payload: action.payload
      }
    case Actions.GETBOARD_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case Actions.GETBOARD_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}