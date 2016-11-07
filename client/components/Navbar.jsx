import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';


class NavBar extends Component {

  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <img alt="Masterpiece Trivia" src="../../svg/masterpieces-logo.svg" />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Button bsStyle="default" className="navbar-right">
            <Link to="jungle">Jungle<em> fun</em></Link>
          </Button>
          <Button bsStyle="default" className="navbar-right">
            <Link to="mondrian"><em>paint a </em>Mondrian</Link>
          </Button>
        </Navbar>
    )
  }
}

export default NavBar;
