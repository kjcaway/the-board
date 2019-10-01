import React, { Component } from 'react'
import {connect } from 'react-redux';
import MessageBox from '../../components/common/MessageBox';
import * as CommonActions from '../../store/actions/commonActions'

interface Props {
  category: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
}
interface State {
}

class MessageContainer extends Component<Props, State> {
  render() {
    return (
      <MessageBox 
        category={this.props.category}
        message={this.props.message}
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
      />
    )
  }
}

export default connect(
  (state: any) => {
    return {
      isOpen: state.common.isOpen,
      message: state.common.message,
      category: state.common.category
    }
  },
  (dispatch) => {
    return {
      onClose: () => {
        dispatch({type: CommonActions.HIDE_MESSAGE})
      }
    }
  }
)(MessageContainer);
