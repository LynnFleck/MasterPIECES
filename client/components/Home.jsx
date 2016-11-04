import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import IntroPanel from './IntroPanel.jsx';


class Home extends Component {
  constructor() {
    super();
    this.svgClickEvents = this.svgClickEvents.bind(this);
    // this.sendNewQuestion = this.sendNewQuestion.bind(this);
  }

  svgClickEvents() {
    document.querySelector('#mondrian5').addEventListener('click', this.sendNewQuestion);
  }

  sendNewQuestion() {
    prompt('this is not being used yet, just here for testing')
      // if answered correctly
        // popup states answer is correct
        // change color of block to vivid
      // else popup states answer is wrong, try again
      // close popup
  }

  render() {
    return (
      <div className="container">
        <div className="container col-xs-12 col-md-4">
          <IntroPanel  />
        </div>
        <div className="container col-xs-12 col-md-8">
          <ReactSVG
            path={'./svg/mondrian.svg'}
            className={"home-mondrian"}
            callback={this.svgClickEvents}
          />
        </div>
      </div>
      )
  }
}

export default Home;


