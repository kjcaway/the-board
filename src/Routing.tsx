import React, { Component } from "react";
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

import BoardTemplate from './templates/BoardTemplate'
import WriteTemplate from './templates/WriteTemplate'

import BoardContainer from './containers/BoardContainer'

export class Routing extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={BoardTemplate}></Route>
            <Route path="/login" component={() => { return <>Login</>}}></Route>
            <Route path="/write" component={WriteTemplate}></Route>
            <Route path="/board" component={BoardContainer}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default Routing
