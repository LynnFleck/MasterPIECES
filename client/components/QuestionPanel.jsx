import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import request from 'superagent';

class QuestionPanel extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      type: '',
      difficulty: '',
      question: '',
      correctAnswer: '',
      incorrectAnswers: [],
      guessedAnswer: '',
      allAnswers: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isAnswerCorrect = this.isAnswerCorrect.bind(this);
    this.addWrongAnswerClass = this.addWrongAnswerClass.bind(this);
    this.removeWrongAnswerClass = this.removeWrongAnswerClass.bind(this);
    this.removeActiveClass = this.removeActiveClass.bind(this);
    this.getTrivia = this.getTrivia.bind(this);
    this.scrambleAnswers = this.scrambleAnswers.bind(this);
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
    } else if (guess.value === this.state.correctAnswer) {
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
        category: triviaData.results[0].category,
        type: triviaData.results[0].type,
        difficulty: triviaData.results[0].difficulty,
        question: triviaData.results[0].question
          .replace(/&#039;/gi, "'")
          .replace(/&quot;/gi, '"')
          .replace(/&Uuml;/gi, '¨')
          .replace(/&amp;/gi, '&')
          .replace(/&scaron;/gi, 'š')
          .replace(/&aacute;/gi, 'á')
          .replace(/&Omicron;/gi, 'Ο')
          .replace(/&Sigma;/gi, 'Σ')
          .replace(/&Pi;/gi, 'π')
          .replace(/&Nu;/gi, 'Ν')
          ,
        correctAnswer: triviaData.results[0].correct_answer
          .replace(/&#039;/gi, "'")
          .replace(/&quot;/gi, '"')
          .replace(/&Uuml;/gi, '¨')
          .replace(/&amp;/gi, '&')
          .replace(/&scaron;/gi, 'š')
          .replace(/&aacute;/gi, 'á')
          .replace(/&Omicron;/gi, 'Ο')
          .replace(/&Sigma;/gi, 'Σ')
          .replace(/&Pi;/gi, 'π')
          .replace(/&Nu;/gi, 'Ν')
          ,
        incorrectAnswers: triviaData.results[0].incorrect_answers,
       });
      if (this.state.type === "multiple") {
        setTimeout(this.scrambleAnswers, 500);
      }
    });


  }
  scrambleAnswers() {
    let randomIndex = Math.floor(Math.random() * 4);
    const threeChoices = this.state.incorrectAnswers;
    threeChoices.splice(randomIndex, 0, this.state.correctAnswer);
    this.setState({ allAnswers: threeChoices });
  }
  componentDidMount() {
    this.getTrivia();
  }
  render() {
    let answerChoices;
      if(this.state.type === "boolean") {
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
                     autoComplete="off" value={this.state.allAnswers[0]}/>
                     {this.state.allAnswers[0]}
            </label>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option2"
                     autoComplete="off" value={this.state.allAnswers[1]}/>
                     {this.state.allAnswers[1]}
            </label>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option3"
                     autoComplete="off" value={this.state.allAnswers[2]}/>
                     {this.state.allAnswers[2]}
            </label>
            <label className="btn btn-default">
              <input type="radio" name="options" id="option4"
                     autoComplete="off" value={this.state.allAnswers[3]}/>
                     {this.state.allAnswers[3]}
            </label>
          </div>
        )
      }
      return (
            <div className="answer-section">
              <div className="results-info">
                <h5>{this.state.category}</h5>
                <h5><em>Difficulty: </em>{this.state.difficulty}</h5>
                <h2>Number Left: {this.props.numberLeft}/16</h2>
              </div>
              <h2>{this.state.question}</h2>
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
