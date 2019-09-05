import React, { Component } from 'react'

import Top from '../../components/common/Top';
import {history} from '../../store/configureStore';


interface Props {
}
interface State {
  anchorEl: any;
  title: string;
}

class MenuContainer extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      anchorEl: null,
      title: 'The Board'
    }
  }

  // 메뉴 아이콘 클릭 시
  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      anchorEl: e.currentTarget
    })
  }

  // 원하는 메뉴 클릭 시 
  handleClose = (url: string) => {
    this.setState({
      anchorEl: null
    })
    if(url){
      history.push(`${url}`)
    }
  }

  render() {
    return (
      <Top 
        handleClick={this.handleClick}
        handleClose={this.handleClose}
        title={this.state.title}
        anchorEl={this.state.anchorEl}
      />
    )
  }
}

export default MenuContainer
