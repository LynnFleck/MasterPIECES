const superRequest = require('superagent');

class GeneralTrivia {
  constructor() {
    this.generalUrl = 'https://www.opentdb.com/api.php?amount=1';
  }
  getGeneralQuestion() {
    return superRequest.get(this.generalUrl)
      .then((response) => {
        return response.text;
    });
  }
}

module.exports = GeneralTrivia;
