import React, { Component } from 'react';
import ReactSVG from 'react-svg';

class MondrianPuzzle extends Component {
  constructor() {
    super();
    this.svgClickEvents = this.svgClickEvents.bind(this);
  }
  svgClickEvents() {
    document.querySelector('#red5').addEventListener('click', this.popUpAQuestion) ;
  }
  render() {
    return (
      <div>
        <ReactSVG
          path={'./svg/mondrian.svg'}
          className={"mondrian-puzzle"}
          callback={this.svgClickEvents}
        />
      </div>
    )
  }
}

export default MondrianPuzzle;


