import React, { Component } from 'react'
import Progress from '../../components/common/Progress';

// typescript window property add
declare global {
  interface Window { progressbar: any; }
}
window.progressbar = window.progressbar || {};

interface Props {
}
interface State {
  progress: number;
  active: boolean;
}
class ProgressContainer extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state ={
      progress: 0,
      active: false
    }
  }

  componentDidMount(){
    window.progressbar = this
  }

  onChange = (value: number) => {
    if(value === 100){
      this.setState({
        progress: value,
        active:true
      }, this.onInit)
    } else{
      this.setState({
        progress: value,
        active:true
      })
    }
  }

  onInit = () => {
    setTimeout(() => {
      this.setState({
        progress: 0,
        active:false
      })
    }, 1000)
  }

  render() {
    return (
      <Progress active={this.state.active} progress={this.state.progress}/>
    )
  }
}

export default ProgressContainer
