import React, { Component } from 'react'
import {connect } from 'react-redux';
import moment from 'moment';
import { convertFromRaw} from 'draft-js';

import * as BoardActions from '../../store/actions/boardActions'
import BoardList from '../../components/board/BoardList';

import SpeedDialContainer from './SpeedDialContainer'

interface Props {
  boardList: [];
  status: string;
  fetchGetBoard: Function;
}
interface State {
}

class BoardContainer extends Component<Props, State> {
  componentDidMount(){
    this.props.fetchGetBoard();
  }

  render() {
    let boardList = this.props.boardList || [];
    boardList.map((one: any) => {
      one.date_write = moment(one.date_write, moment.HTML5_FMT.DATETIME_LOCAL_MS).add(moment().utcOffset(), 'm').fromNow(); // utc to local, fromNow
      const blocks = convertFromRaw(JSON.parse(one.contents)).getPlainText() // db to simple view data
      one.contents = blocks;
    })


    return (
      <>
        {
          this.props.status === "SUCCESS"
          ?
          <div style={{
            width: '100%',
            height: '90%',
            position: 'relative',
          }}>
            <BoardList 
              data={boardList}
            />
            <SpeedDialContainer />
          </div>
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
