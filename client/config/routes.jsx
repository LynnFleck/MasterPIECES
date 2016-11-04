import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';


const Routes = () => {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/" component={Home} />
        </Route>
      </Router>
    );
}

export default Routes;


