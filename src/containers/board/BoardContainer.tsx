import React, { Component } from 'react'
import {connect } from 'react-redux';
import moment from 'moment';
import { convertFromRaw} from 'draft-js';

import * as BoardActions from '../../store/actions/boardActions'
import BoardList from '../../components/board/BoardList';

import SpeedDialContainer from './SpeedDialContainer'

interface Props {
  boardList: Array<Object>;
  status: string;
  fetchGetBoard: (obj: any) => void;
}
interface State {
}

class BoardContainer extends Component<Props, State> {
  componentDidMount(){
    this.props.fetchGetBoard({});
  }

  render() {
    let boardList = this.props.boardList || [];

    boardList.map((one: any) => {
      const blocks = convertFromRaw(JSON.parse(one.contents)).getPlainText() // db to simple view data
      one.date_write_from_now = moment(one.date_write, moment.HTML5_FMT.DATETIME_LOCAL_MS).add(moment().utcOffset(), 'm').fromNow(); // utc to local, fromNow
      one.contents_text = blocks;
      return one;
    })


    return (
      <>
        {
          this.props.status === "SUCCESS"
          ?
          <>
            <BoardList 
              data={boardList}
            />
            <SpeedDialContainer />
          </>
          :
          <></>
        }
      </>
    )
  }
}

export default connect(
  (state: any) => {
    return {
      boardList: state.board.data,
      status: state.board.status
    }
  },
  (dispatch) => {
    return {
      fetchGetBoard: (obj: any) => {
        dispatch({type: BoardActions.GETBOARD, payload: obj})
      }
    }
  }
)(BoardContainer);
