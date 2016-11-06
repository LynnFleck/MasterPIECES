import React, { Component } from 'react';
import ReactSVG from 'react-svg';

class Jungle extends Component {
  render() {
    return (
      <div className="container">
        <div className="container col-xs-12 col-md-4">
          <h1>Jungle Question Panel</h1>
        </div>
        <div className="container col-xs-12 col-md-8">
          <ReactSVG
            path={'./svg/mondrian.svg'}
            className={"game-mondrian"}
          />
        </div>
      </div>
      )
  }
}

export default Jungle;
