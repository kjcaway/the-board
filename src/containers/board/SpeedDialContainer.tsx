import React, { Component } from 'react'

import SpeedDialBtn from '../../components/board/SpeedDialBtn';
import {history} from '../../store/configureStore';
import * as properties from '../../lib/properties';

interface Props {
}
interface State {
  open: boolean;
}

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
        
        options={properties.SPEED_DIAL_OPTIONS}
      />
    )
  }
}

export default SpeedDialContainer
