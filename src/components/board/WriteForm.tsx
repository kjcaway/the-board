import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';

import EditorComp from './EditorComp'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '1rem',
    backgroundColor: '#f0f0f0'
  },
  formControl: {
    marginTop: '5px'
  },
  title: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    marginLeft: theme.spacing(1),
  },
  txtField: {
    margin: theme.spacing(1),
  },
  txtFieldHalf: {
    width: '50%',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  row: {
    width: '100%'
  },
  editorRow: {
    width: '90%',
    backgroundColor: '#ffffff',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  btnRow: {
    marginTop: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));

const WriteForm = (props: any) => {
  const classes = useStyles({});

  return (
    <div className={classes.root} >
      <Typography variant="subtitle1" className={classes.title}>
        Write an Article.
      </Typography>
      <div className={classes.row}>
      <TextField
          id="title"
          name="title"
          label="Title"
          defaultValue=""
          className={classes.txtFieldHalf}
          margin="normal"
          variant="standard"
        />
      </div>
      <div className={classes.editorRow}>
        <EditorComp 
          onChangeEditor={props.onChangeEditor}
          editorState={props.editorState}
        />
      </div>
      <div className={classes.btnRow}>
        <Button variant="contained" color="primary" className={classes.txtField}>
          Save
        </Button>
        <Button variant="contained" color="default" className={classes.txtField}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default WriteForm
