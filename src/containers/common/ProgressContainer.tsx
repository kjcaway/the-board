import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';

// typescript window property add
declare global {
  interface Window { progressbar: any; }
}
window.progressbar = window.progressbar || {};

interface Props {
}
interface State {
  progress: number;
}

class ProgressContainer extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state ={
      progress: 0
    }
  }

  componentDidMount(){
    window.progressbar = this
  }

  onChange = (value: number) => {
    if(value === 100){
      this.setState({
        progress: value
      })
    } else{
      this.setState({
        progress: value
      })
    }
  }

  render() {
    return (
      <LinearProgress color="primary" variant="determinate" value={this.state.progress} />
    )
  }
}

export default ProgressContainer
