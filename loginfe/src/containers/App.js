import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { path } from '../utils'
import Login from './auth/Login';

function App() {
  return (
    <Fragment>
      <Router>
          <div className="main-container">
              <div className="content-container">
                      <Switch>
                          <Route path={path.LOG_IN} component={Login} />
                      </Switch>
              </div>
          </div>
      </Router>
    </Fragment>
  );
}

export default App;
