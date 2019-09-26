import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { Routing } from './Routing';

import MenuContainer from './containers/common/MenuContainer';
import ProgressContainer from './containers/common/ProgressContainer';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f0f0f1',
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const App: React.FC = () => {
  const classes = useStyles({});
  return (
    <Container
      maxWidth="lg"
      classes={{
        root: classes.root,
      }}
    >
      <CssBaseline />
      <ProgressContainer />
      <MenuContainer />
      <Routing />
    </Container>
  );
}

export default App;
