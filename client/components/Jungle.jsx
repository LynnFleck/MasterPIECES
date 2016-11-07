import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import JunglePanel from './JunglePanel.jsx';


class Jungle extends Component {
 constructor() {
    super();
    this.state = {
      imageIdx: 0,
    }
    this.hideTheAnimals = this.hideTheAnimals.bind(this);
    this.showTheAnimals = this.showTheAnimals.bind(this);
  }
  hideTheAnimals() {
    $("#snail").addClass('hidden-animal');
    $("#giraffe").addClass('hidden-animal');
    $("#cat").addClass('hidden-animal');
    $("#snail").addClass('hidden-animal');
    $("#snake").addClass('hidden-animal');
    $("#elephant").addClass('hidden-animal');
    $("#monkey").addClass('hidden-animal');
    $("#bunny").addClass('hidden-animal');
    $("#ostrich").addClass('hidden-animal');
    $("#bird").addClass('hidden-animal');
  }
  showTheAnimals() {
    let animals = [snail, giraffe, cat, snake, elephant, monkey, bunny, ostrich, bird];
    console.log(animals[this.state.imageIdx])
    $(animals[this.state.imageIdx]).removeClass('hidden-animal');
    let newImageIdx = this.state.imageIdx + 1;
    this.setState({ imageIdx: newImageIdx})
  }
  componentDidMount() {
    this.hideTheAnimals();
  }
  render() {
    return (
      <div className="container">
        <div className="jungle-panel container col-xs-12 col-md-5">
          <h1><em>Fun in the </em>Jungle</h1>
          <JunglePanel
            showAnimal={this.showTheAnimals}
            />
        </div>
        <div className="container col-xs-12 col-md-7">
          <ReactSVG
            path={'./svg/jungle.svg'}
            className={"game-jungle"}
            callback={this.hideTheAnimals}
          />
        </div>
      </div>
      )
  }
}

export default Jungle;



