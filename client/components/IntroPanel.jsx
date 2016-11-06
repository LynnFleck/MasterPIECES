import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import request from 'superagent';


class IntroPanel extends Component {
    render() {
      return (
              <div className="intro-section">
                <h1>MasterPIECES</h1>
                <h2>Create a famous – <em>or not so famous</em> – work of art by answering some trivial questions.</h2>
                <Button bsStyle="danger" onClick={this.handleSubmit}>Let's Get Started!</Button>
              </div>
        )
    }
  }

  export default IntroPanel;
