import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '1rem'
  },
  formControl: {
    marginTop: '5px'
  },
  title: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    marginLeft: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textField2: {
    width: '50%',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  row: {
    flexWrap: 'wrap',
    width: '100%'
  },
  btn: {
    marginTop: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));


function WriteTemplate() {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Typography variant="subtitle1" className={classes.title}>
        Write form
      </Typography>
      <div className={classes.row}>
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="filled-helperText2"
          label="Helper text2"
          defaultValue=""
          className={classes.textField}
          helperText="Some important text2"
          margin="normal"
          variant="filled"
        />
      </div>
      <div className={classes.row}>
        <TextField
          id="a1"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="a2"
          label="Helper text2"
          defaultValue=""
          className={classes.textField2}
          helperText="Some important text2"
          margin="normal"
          variant="filled"
        />
      </div>
      <div className={classes.btn}>
        <Button variant="contained" color="primary" className={classes.textField}>
          Primary
        </Button>
        <Button variant="contained" color="default" className={classes.textField}>
          Default
        </Button>
      </div>
    </div>
  )
}

export default WriteTemplate
