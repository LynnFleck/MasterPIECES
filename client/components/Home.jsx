import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import IntroPanel from './IntroPanel.jsx';


class Home extends Component {
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
          />
        </div>
      </div>
      )
  }
}

export default Home;


