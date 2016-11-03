const superRequest = require('superagent');

class ColourLovers {
  constructor() {
    this.randomPalleteUrl = 'http://www.colourlovers.com/api/palettes/random?format=json';
  }
  getColors() {
    return superRequest.get(this.randomPalleteUrl)
      .then((colorResponse) => {
        return colorResponse.body[0];
    });
  }
}

module.exports = ColourLovers;
