import React, { Component } from 'react';
import request from 'superagent';
import NavBar from './Navbar.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div id="main" className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
