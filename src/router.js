import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login';
import Home from './pages/home';
import Button from './pages/ui/button';
import Collapse from './pages/ui/collapse';
import NoPath from './pages/404';

export default class RouterComponent extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Login} />
          <Route path='/admin' render={
            () => (
              <Admin>
                <Switch>
                  <Route path='/admin/ui/home' component={Home} />
                  <Route path='/admin/ui/buttons' component={Button} />
                  <Route path='/admin/ui/collapse' component={Collapse} />
                  <Route component={NoPath} />
                </Switch>
              </Admin>
            )
          } />
        </App>
      </HashRouter>
    );
  }
}
