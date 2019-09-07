import React, { Component } from 'react'
import {EditorState} from 'draft-js';
import WriteForm from '../../components/board/WriteForm'

interface Props {}
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

  render() {
    return (
      <>
        <WriteForm 
          onChangeEditor={this.onChangeEditor}
          editorState={this.state.editorState}
        />
      </>
    )
  }
}

export default WriteContainer
