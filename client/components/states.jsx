  svgClickEvents() {
    document.querySelector('#mondrian5').addEventListener('click', this.sendNewQuestion);
  }

    imageNumber = imageNumber.sort(function() { return 0.5 - Math.random() });

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
