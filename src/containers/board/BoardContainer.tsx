import React, { Component } from 'react'
import {connect } from 'react-redux';

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
              data={this.props.boardList}
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
