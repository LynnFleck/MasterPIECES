import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';


class IntroPanel extends Component {
    render() {
      return (
              <div className="intro-section">
                <h1>MasterPIECES</h1>
                <h2>Create a famous – <em>or not so famous</em> – work of art by answering some trivial questions.</h2>
                <Button bsStyle="danger">
                  <Link to="mondrian">Let's Get Started!</Link>
                </Button>
              </div>
        )
    }
  }

  export default IntroPanel;
