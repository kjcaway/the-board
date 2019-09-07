import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { MenuProps } from '@material-ui/core/Menu';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TagFacesOutlinedIcon from '@material-ui/icons/TagFacesOutlined';

interface Props {
  onClick: any;
  anchorEl: any;
  menus: any;
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
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
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

const TopLeftMenu = (props: Props) => {
  const mapMenuItem = (arr: Array<any>) => {
    return arr.map((one) => {
      return (
        <StyledMenuItem key={one.name}>
          <ListItemIcon>
            <TagFacesOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={one.name} onClick={() => props.onClick(one.route)}/>
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
      onClose={() => props.onClick()}
    >
      {mapMenuItem(props.menus)}
    </StyledMenu>
  )
}

export default TopLeftMenu
