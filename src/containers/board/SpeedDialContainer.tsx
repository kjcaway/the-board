import React, { Component } from 'react'

import SpeedDialBtn from '../../components/board/SpeedDialBtn';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
}
interface State {
  open: boolean;
}
const options = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class SpeedDialContainer extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
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
