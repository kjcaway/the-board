import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

import { Routing } from './Routing';
import MenuContainer from './containers/common/MenuContainer';

const useStyles = makeStyles({
  root: {
    height: '100vh'
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
      <MenuContainer />
      <Routing />
    </Container>
  );
}

export default App;
