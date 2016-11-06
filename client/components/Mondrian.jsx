import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import QuestionPanel from './QuestionPanel.jsx';


class Mondrian extends Component {
  constructor() {
    super();
    this.state = {
      imageIdx: 0,
    }
    this.paintEverythingDrab = this.paintEverythingDrab.bind(this);
    this.removeDrabClass = this.removeDrabClass.bind(this);
  }
  paintEverythingDrab() {
    $(".st0").addClass('drab');
    $(".st1").addClass('drab');
    $(".st3").addClass('drab');
  }
  removeDrabClass() {
    let imageNumber = [9, 13, 2, 5, 14, 12, 6, 11, 10, 16, 4, 8, 3, 15, 7, 1];
    $("#mondrian" + imageNumber[this.state.imageIdx]).removeClass('drab');
    let newImageIdx = this.state.imageIdx + 1;
    this.setState({ imageIdx: newImageIdx})
  }
  componentDidMount() {
    this.paintEverythingDrab();
  }

  render() {
    return (
      <div className="container">
        <div className="mondrian-panel container col-xs-12 col-md-5">
          <h1><em>paint a </em>Mondrian</h1>
          <QuestionPanel
            removeDrab={this.removeDrabClass}
            />
        </div>
        <div className="container col-xs-12 col-md-7">
          <ReactSVG
            path={'./svg/mondrian.svg'}
            className={"game-mondrian"}
            callback={this.paintEverythingDrab}
          />
        </div>
      </div>
      )
  }
}

export default Mondrian;


