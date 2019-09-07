import React, { Component } from 'react'

import SpeedDialBtn from '../../components/board/SpeedDialBtn';

import DeleteIcon from '@material-ui/icons/Delete';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import {history} from '../../store/configureStore';


interface Props {
}
interface State {
  open: boolean;
}
const options = [
  { icon: <CreateOutlinedIcon />, name: 'Write', route: '/write' },
  { icon: <DeleteIcon />, name: 'Delete', route: '/write' },
];

class SpeedDialContainer extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = (url: string) => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
    console.log(url)

    if(url){
      history.push(`${url}`)
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <SpeedDialBtn 
        open={this.state.open}
        handleClick={this.handleClick}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
        
        options={options}
      />
    )
  }
}

export default SpeedDialContainer
