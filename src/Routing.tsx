import React, { Component } from "react";
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

import BoardTemplate from './templates/BoardTemplate'
import WriteTemplate from './templates/WriteTemplate'

export class Routing extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={BoardTemplate}></Route>
            <Route path="/login" component={() => { return <>Login</>}}></Route>
            <Route path="/write" component={WriteTemplate}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default Routing
