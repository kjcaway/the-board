import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { MenuProps } from '@material-ui/core/Menu';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TagFacesOutlinedIcon from '@material-ui/icons/TagFacesOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

interface Props {
  onClose: (e: any) => void;
  anchorEl: any;
  menuList: Array<Object>;
}

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const mapToComponent = (name: string) => {
  switch(name){
    case 'Board' : return <TagFacesOutlinedIcon/>
    case 'Test write' : return <CreateOutlinedIcon/>
    default: return <TagFacesOutlinedIcon/>
  }
}

const TopLeftMenu = (props: Props) => {
  const mapMenuItem = (arr: Array<any>) => {
    return arr.map((one) => {
      return (
        <StyledMenuItem key={one.name}>
          <ListItemIcon onClick={() => props.onClose(one.route)}>
            {mapToComponent(one.name)}
          </ListItemIcon>
          <ListItemText primary={one.name} onClick={() => props.onClose(one.route)}/>
        </StyledMenuItem>
      )
    })
  }

  return (
    <StyledMenu
      id="customized-menu"
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={() => props.onClose(null)}
    >
      {mapMenuItem(props.menuList)}
    </StyledMenu>
  )
}

export default TopLeftMenu
