import React, { Component } from "react";
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

import BoardTemplate from './templates/BoardTemplate'
import WriteTemplate from './templates/WriteTemplate'

import BoardContainer from './containers/board/BoardContainer'
import WriteContainer from "./containers/board/WriteContainer";

export class Routing extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={BoardContainer}></Route>
            <Route path="/board" component={BoardContainer}></Route>
            <Route path="/write" component={WriteContainer}></Route>
            <Route path="/login" component={() => { return <>Login</>}}></Route>
            <Route exact path="/temp/write" component={WriteTemplate}></Route>
            <Route exact path="/temp/board" component={BoardTemplate}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default Routing
