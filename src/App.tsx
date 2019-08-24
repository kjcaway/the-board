import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Routing } from './Routing';
import MenuTemplate from './templates/MenuTemplate';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f0f0f1',
    height: '100vh'
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" classes={{
        root: classes.root,
      }}>
        <MenuTemplate />
        <Routing />
      </Container>
    </>
  );
}

export default App;
