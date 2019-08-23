import React, { Component } from "react";
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './store/configureStore';

export class Routing extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={() => { return <>hi</>}}></Route>
            <Route path="/hello" component={() => { return <>hello</>}}></Route>
            <Route path="/man" component={() => { return <>man</>}}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default Routing
