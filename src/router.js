import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Button from './pages/ui/button';
import Home from './pages/home';
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
                  <Route path='/admin/ui/buttons' component={Button} />
                  <Route path='/admin/ui/home' component={Home} />
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
