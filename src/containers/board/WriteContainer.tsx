import React, { Component } from 'react'
import {connect } from 'react-redux';
import {EditorState, convertToRaw} from 'draft-js';
import WriteForm from '../../components/board/WriteForm'

import * as BoardActions from '../../store/actions/boardActions'
import {history} from '../../store/configureStore';

interface Props {
  writeBoard: any
}
interface State {
  editorState: any
}

class WriteContainer extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChangeEditor = (editorState: any) => {
    this.setState({
      editorState
    })
  }

  onSaveClick = () => {
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const rawContents = convertToRaw(this.state.editorState.getCurrentContent()); // state to db raw
    // const blocks = convertToRaw(this.state.editorState.getCurrentContent()).blocks;
    // const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    let json = {
      title: title,
      contents: JSON.stringify(rawContents)
    }
    this.props.writeBoard(json)
  }

  onCancelClick = () => {
    history.push('/board')
  }

  render() {
    return (
      <>
        <WriteForm 
          onChangeEditor={this.onChangeEditor}
          editorState={this.state.editorState}
          onSaveClick={this.onSaveClick}
          onCancelClick={this.onCancelClick}
        />
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
      writeBoard: (obj: any) => {
        dispatch({type: BoardActions.WRITEBOARD, payload: obj})
      }
    }
  }
)(WriteContainer);
