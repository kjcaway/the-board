import React, { MouseEventHandler } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import TopRight from './TopRight';
import TopLeftMenu from './TopLeftMenu';

interface Props {
  handleClick: MouseEventHandler;
  handleClose: (e: any) => void;
  title: string;
  anchorEl: any;
  menuList: Array<Object>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);


const Top = (props: Props) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={props.handleClick}>
            <MenuIcon />
          </IconButton>
          <TopLeftMenu 
            onClose={props.handleClose}
            anchorEl={props.anchorEl}
            menuList={props.menuList}
          />
          <TopRight title={props.title}/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Top
