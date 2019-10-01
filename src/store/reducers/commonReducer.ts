import * as Actions from '../actions/commonActions';

const initialState = {
  isOpen: false,
  message: '',
  category: ''
}

export const reducer = (state=initialState, action: any) => {
  switch(action.type){
    case Actions.PUSH_MESSAGE:
      return {
        ...state,
        isOpen: true,
        message: action.payload.message,
        category: action.payload.category,
      }
    case Actions.HIDE_MESSAGE:
      return {
        ...state,
        isOpen: false,
        message: '',
        category: '',
      }
    default:
      return{
        ...state
      }
  }
}