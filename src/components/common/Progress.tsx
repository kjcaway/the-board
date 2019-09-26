import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Fade, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

interface Props {
  progress: number;
  active: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    bar: {
      position: 'fixed',
      top: 0,
      left:0,
      width: '100%',
      zIndex: 9999
    },
  }),
);

const theme = createMuiTheme({
  overrides: {
    MuiLinearProgress: {
      barColorPrimary: {
        backgroundColor: '#0721b3'
      }
    }
  }
})

const Progress = (props: Props) => {
  const classes = useStyles({})
  return (
    <Fade in={props.active}>
      <div className={classes.bar}>
        <MuiThemeProvider theme={theme}>
          <LinearProgress 
            color="primary" 
            variant="determinate" 
            value={props.progress}
          />
        </MuiThemeProvider>
      </div>
    </Fade>
  )
}

export default Progress
