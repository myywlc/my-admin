import React, { PureComponent } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import BasicLayout from './layouts/BasicLayout';
import Index from './pages/Index';
import NoPath from './pages/404';

export default class RouterComponent extends PureComponent {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/login' component={Login} />
          <Route path='/zhaopin' render={
            () => (
              <BasicLayout>
                <Switch>
                  <Route path='/zhaopin/index' component={Index} />
                  <Route component={NoPath} />
                </Switch>
              </BasicLayout>
            )
          } />
        </div>
      </HashRouter>
    );
  }
}
