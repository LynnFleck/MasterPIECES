import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import QuestionPanel from './QuestionPanel.jsx';


class Home extends Component {
  constructor() {
    super();
    this.svgClickEvents = this.svgClickEvents.bind(this);
    this.sendNewQuestion = this.sendNewQuestion.bind(this);
  }

  svgClickEvents() {
    document.querySelector('#red5').addEventListener('click', this.sendNewQuestion);
  }

  sendNewQuestion() {
    prompt('answer the questions')
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
          <QuestionPanel  />
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


