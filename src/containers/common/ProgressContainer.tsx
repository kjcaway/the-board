import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


class ProgressContainer extends Component {
  render() {
    return (
      <LinearProgress color="primary" variant="determinate" value={30} />
    )
  }
}

export default ProgressContainer
