import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Mondrian from '../components/Mondrian.jsx';
import Jungle from '../components/Jungle.jsx';


const Routes = () => {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="mondrian" component={Mondrian} />
          <Route path="jungle" component={Jungle} />
        </Route>
      </Router>
    );
}

export default Routes;


