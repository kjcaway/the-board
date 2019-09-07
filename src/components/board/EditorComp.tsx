import React from 'react'
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const EditorComp = (props: any) => {
  return (
    <Editor
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      editorState={props.editorState}
      onEditorStateChange={props.onChangeEditor}
    />
  )
}

export default EditorComp
