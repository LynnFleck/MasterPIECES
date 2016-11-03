import React from 'react';
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [],
      trivia: [],
    };
    this.getColors = this.getColors.bind(this);
    this.getTrivia = this.getTrivia.bind(this);
  }
  getColors() {
    request.get('/api/colors')
    .then((colorData) => {
      this.setState({ colors: colorData.body.colors });
    });
  }
  getTrivia() {
    request.get('/api/general')
    .then((triviaData) => {
      triviaData = JSON.parse(triviaData.text);
      this.setState({ trivia: triviaData.results[0] });
    });
  }
  componentDidMount() {
    this.getColors();
    this.getTrivia();
    setInterval(this.getTrivia, 5000);
  }
  render() {
    return (
      <div>
        <h1 style={{ color: `#${this.state.colors[1]}` }}>
          WEeeeeeeeeeeeeeeee!
        </h1>
        <p>Category: {this.state.trivia.category } </p>

      </div>
    );
  }
}

export default App;
