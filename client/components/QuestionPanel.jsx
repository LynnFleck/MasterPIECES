import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import request from 'superagent';

class QuestionPanel extends Component {
  constructor() {
    super();
    this.state = {
      trivia: {},
      triviaQuestion: '',
      incorrectAnswer: [],
      guessedAnswer: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTrivia = this.getTrivia.bind(this);
    this.isAnswerCorrect = this.isAnswerCorrect.bind(this);
    this.addWrongAnswerClass = this.addWrongAnswerClass.bind(this);
    this.removeWrongAnswerClass = this.removeWrongAnswerClass.bind(this);
    this.removeActiveClass = this.removeActiveClass.bind(this);
  }
  handleSubmit() {
    this.isAnswerCorrect();
  }
  isAnswerCorrect() {
    const guess = document.querySelector('label.active > input');
    const marquee = document.querySelector('.submission-response');
    this.setState({ guessedAnswer: guess.value });
    if (guess.value == null) {
      marquee.innerHTML = "please select an answer";
    } else if (guess.value === this.state.trivia.correct_answer) {
      marquee.innerHTML = "bingo!";
      this.props.removeDrab();
      this.removeActiveClass();
      this.removeWrongAnswerClass();
      this.getTrivia();
    } else {
      marquee.innerHTML = "Sorry, try again";
      this.addWrongAnswerClass();
      this.removeActiveClass();
    }

  }
  addWrongAnswerClass() {
    $("label.active").addClass('previous-answer');
  }
  removeWrongAnswerClass() {
    $("label").removeClass('previous-answer');
  }
  removeActiveClass() {
    $("label").removeClass('active');
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
          .replace(/&amp;/g, '&')
          ,
        incorrectAnswer: triviaData.results[0].incorrect_answers,
       });
    });
  }
  componentDidMount() {
    this.getTrivia();
  }

  render() {
    let answerChoices;
      if(this.state.trivia.type === "boolean") {
        answerChoices = (
          <div>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option1"
                     autoComplete="off" value="True"/>
                     True
            </label>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option2"
                     autoComplete="off" value="False"/>
                     False
            </label>
          </div>
        )
      } else {
        answerChoices = (
          <div>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option1"
                     autoComplete="off" value={this.state.trivia.correct_answer}/>
                     {this.state.trivia.correct_answer}
            </label>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option2"
                     autoComplete="off" value={this.state.incorrectAnswer[0]}/>
                     {this.state.incorrectAnswer[0]}
            </label>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option3"
                     autoComplete="off" value={this.state.incorrectAnswer[1]}/>
                     {this.state.incorrectAnswer[1]}
            </label>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option4"
                     autoComplete="off" value={this.state.incorrectAnswer[2]}/>
                     {this.state.incorrectAnswer[2]}
            </label>
          </div>
        )
      }
      return (
            <div className="answer-section">
              <div className="results-info">
                <h5>{this.state.trivia.category}</h5>
                <h5><em>Difficulty: </em>{this.state.trivia.difficulty}</h5>
                <h2>Number Left: {this.props.numberLeft}/16</h2>
              </div>
              <h1>{this.state.triviaQuestion}</h1>
              <h4 className="submission-response">Please select an answer:</h4>
              <div id="answers" className="btn-group" data-toggle="buttons">
                {answerChoices}
              </div>
              <Button bsStyle="danger" onClick={this.handleSubmit}>Submit</Button>
            </div>
            )
    }
  }

  export default QuestionPanel;
