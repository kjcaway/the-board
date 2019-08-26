import { combineReducers } from 'redux';
import {reducer as board} from './boardReducer';


const rootReducer = combineReducers({
  board,
})

export default rootReducer