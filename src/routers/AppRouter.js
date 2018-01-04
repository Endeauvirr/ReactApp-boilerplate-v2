import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

// Switch to <Router>  from <BrowserRouter> in order to use custom controlled history manipulation tool
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" exact component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
