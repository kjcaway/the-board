import React, { Component } from 'react'
import {connect } from 'react-redux';

import * as BoardActions from '../store/actions/boardActions'

interface Props {
  data: [];
  fetchGetBoard: any;
}
interface State {
}

class BoardContainer extends Component<Props, State> {
  componentDidMount(){
    this.props.fetchGetBoard()
  }

  render() {
    return (
      <div>
        container
      </div>
    )
  }
}

export default connect(
  (state: any) => {
    return {
      data: state.board.data
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
