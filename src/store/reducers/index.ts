import { combineReducers } from 'redux';
import {reducer as board} from './boardReducer';
import {reducer as common} from './commonReducer';


const rootReducer = combineReducers({
  common,
  board,
})

export default rootReducer