import React, { Component } from 'react';
import request from 'superagent';
import NavBar from './Navbar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trivia: {},
      triviaQuestion: '',
      incorrectAnswer: [],
    };
    this.getTrivia = this.getTrivia.bind(this);
  }
  getTrivia() {
    request.get('/api/general')
    .then((triviaData) => {
      triviaData = JSON.parse(triviaData.text);
      this.setState({
        trivia: triviaData.results[0],
        triviaQuestion: triviaData.results[0].question
          .replace(/&#039;/g, "'")
          .replace(/&quot;/g, '"')
          .replace(/&Uuml;/g, '¨')
          ,
        incorrectAnswer: triviaData.results[0].incorrect_answers,
       });
    });
  }
  componentDidMount() {
    this.getTrivia();
  }
  render() {
    return (
      <div>
      <NavBar />
        <p>{this.state.trivia.category}</p>
        <h1>{this.state.triviaQuestion}</h1>
        <p>{this.state.trivia.correct_answer}</p>
        <p>{this.state.incorrectAnswer[0]}</p>
        <p>{this.state.incorrectAnswer[1]}</p>
        <p>{this.state.incorrectAnswer[2]}</p>
      </div>
    );
  }
}

export default App;
