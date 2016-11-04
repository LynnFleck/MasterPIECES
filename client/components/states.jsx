
var el = document.getElementById('#foo');
el[i].className += ' my-class';





        <p>{this.state.trivia.category}</p>
        <h1>{this.state.triviaQuestion}</h1>
        <p>{this.state.trivia.correct_answer}</p>
        <p>{this.state.incorrectAnswer[0]}</p>
        <p>{this.state.incorrectAnswer[1]}</p>
        <p>{this.state.incorrectAnswer[2]}</p>


   this.isCorrect = this.isCorrect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



 isCorrect() {
    //get value from handle submit for chosen button
    //compare to correct answer
    //set state for iscorrect
  }
  handleSubmit() {
    //get value of active button

    console.log(this.state.triviaQuestion)
  }
  sendNewQuestion() {
    this.getTrivia();
    console.log('sent for a new question')
      // if answered correctly
        // popup states answer is correct
        // change color of block to vivid
      // else popup states answer is wrong, try again
      // close popup
  }


svgClickEvents() {
    document.querySelector('#red5').addEventListener('click', this.sendNewQuestion);
  }

  sendNewQuestion() {
    prompt('answer the questions')
      // if answered correctly
        // popup states answer is correct
        // change color of block to vivid
      // else popup states answer is wrong, try again
      // close popup
  }
