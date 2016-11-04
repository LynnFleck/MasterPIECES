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
      isCorrect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTrivia = this.getTrivia.bind(this);
    this.isAnswerCorrect = this.isAnswerCorrect.bind(this);
  }
  handleSubmit() {
    this.isAnswerCorrect();
  }
  isAnswerCorrect() {
    let guess = document.querySelector('label.active > input');
    this.setState({ guessedAnswer: guess.value })
    if (guess.value === this.state.trivia.correct_answer) {
      this.props.removeDrab();
      this.getTrivia();
    } else {
      console.log('not quite. Let\'s try again')
    }
    //get value from handle submit for chosen button
    //compare to correct answer
    //set state for iscorrect
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
      let triviaAnswers = (
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
        </div>
      )
      let multiAnswers;
        if (this.state.trivia.type === "multiple") {
          multiAnswers = (
            <div>
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
                <h5><em>Category: </em>{this.state.trivia.category}</h5>
                <h5><em>Difficulty: </em>{this.state.trivia.difficulty}</h5>
                <h1>{this.state.triviaQuestion}</h1>
                <div id="answers" className="btn-group" data-toggle="buttons">
                  {triviaAnswers}
                  {multiAnswers}
                </div>
                <Button bsStyle="danger" onClick={this.handleSubmit}>Submit</Button>
              </div>
        )
    }
  }

  export default QuestionPanel;
