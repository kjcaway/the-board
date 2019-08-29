import React, { Component } from 'react'
import {connect } from 'react-redux';

import * as BoardActions from '../store/actions/boardActions'
import BoardList from '../components/board/BoardList';

interface Props {
  boardList: [];
  status: string;
  fetchGetBoard: Function;
}
interface State {
}

class BoardContainer extends Component<Props, State> {
  componentDidMount(){
    console.log('BoardContainer componentDidMount!')
    this.props.fetchGetBoard();
    console.log(this.props)
  }

  render() {
    return (
      <>
        {
          this.props.status === "SUCCESS"
          ?
          <BoardList 
            data={this.props.boardList}
          />
          :
          <div></div>
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
