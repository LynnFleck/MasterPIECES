import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import IntroPanel from './IntroPanel.jsx';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      imageIdx: 0,
    }
    this.paintEverythingDrab = this.paintEverythingDrab.bind(this);
    this.dancingColors = this.dancingColors.bind(this);
    this.revertToDrab = this.revertToDrab.bind(this);
  }
  paintEverythingDrab() {
    $(".st0").addClass('drab');
    $(".st1").addClass('drab');
    $(".st3").addClass('drab');
  }
  dancingColors() {
    let imageNumber = Math.floor(Math.random() * 17);
    $("#mondrian-home" + imageNumber).removeClass('drab');
  }
  revertToDrab() {
    let imageNumber = Math.floor(Math.random() * 17);
    $("#mondrian-home" + imageNumber).addClass('drab');
  }
  componentDidMount() {
    this.paintEverythingDrab();
    setInterval(this.dancingColors, 400);
    setInterval(this.revertToDrab, 700);
  }

  render() {
    return (
      <div className="container">
        <div className="container col-xs-12 col-md-5">
          <IntroPanel  />
        </div>
        <div className="container col-xs-12 col-md-7">
          <ReactSVG
            path={'./svg/mondrian-home.svg'}
            className={"home-mondrian"}
            callback={this.paintEverythingDrab}
          />
        </div>
      </div>
      )
  }
}

export default Home;



