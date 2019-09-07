import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

interface Props {
  open: boolean;
  handleClick: any;
  handleOpen: any;
  handleClose: any;
  options: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '90%',
      position: 'relative',
    },
    listRoot: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(5),
      right: theme.spacing(3),
    },
  }),
);

const SpeedDialBtn = (props: Props) => {
  const classes = useStyles({});

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      className={classes.speedDial}
      icon={<SpeedDialIcon />}
      onBlur={props.handleClose}
      onClick={() => props.handleClick('')}
      onClose={props.handleClose}
      onFocus={props.handleOpen}
      onMouseEnter={props.handleOpen}
      onMouseLeave={props.handleClose}
      open={props.open}
      direction='up'
    >
      {props.options.map((one: any) => (
        <SpeedDialAction
          key={one.name}
          icon={one.icon}
          tooltipTitle={one.name}
          onClick={() => props.handleClick(one.route)}
        />
      ))}
    </SpeedDial>
  )
}

export default SpeedDialBtn
