const superRequest = require('superagent');

class AnimalTrivia {
  constructor() {
    this.animalUrl = 'https://www.opentdb.com/api.php?amount=1&category=27';
  }
  getAnimalQuestion() {
    return superRequest.get(this.animalUrl)
      .then((response) => {
        return response.text;
    });
  }
}

module.exports = AnimalTrivia;


