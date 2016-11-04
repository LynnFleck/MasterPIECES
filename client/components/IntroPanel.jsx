import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import request from 'superagent';


class IntroPanel extends Component {
    render() {
      return (
              <div className="intro-section">
                <h1>this is the intro</h1>
                <p>Create a famous work of art by answering a few trivial questions</p>
                <Button bsStyle="danger" onClick={this.handleSubmit}>Let's Get Started</Button>
              </div>
        )
    }
  }

  export default IntroPanel;
