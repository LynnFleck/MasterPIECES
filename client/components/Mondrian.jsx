import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import QuestionPanel from './QuestionPanel.jsx';


class Mondrian extends Component {
  constructor() {
    super();
    this.state = {
      imageNumber: 16,
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
    $("#mondrian" + this.state.imageNumber).removeClass('drab');
    this.setState({
      imageNumber: this.state.imageNumber-1,
    });
    if (this.state.imageNumber !== 0) {
      console.log('keep playing!')
    }
  }
  componentDidMount() {
    this.paintEverythingDrab();
  }

  render() {
    return (
      <div className="container">
        <div className="container col-xs-12 col-md-4">
          <QuestionPanel
            removeDrab={this.removeDrabClass}
            />
        </div>
        <div className="container col-xs-12 col-md-8">
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


