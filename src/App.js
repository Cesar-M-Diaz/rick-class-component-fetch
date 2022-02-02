import React from 'react';
import './App.css';
import Characters from './characters/Characters';

class App extends React.Component {
  state = {
    page: 1,
  };

  handlePrevious = () => {
    if (this.state.page > 1) {
      this.setState(({ page }) => ({
        page: page - 1,
      }));
    } else {
      return;
    }
  };

  handleNext = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Rick and Morty API</header>
        <section>
          <button onClick={this.handlePrevious}>previous</button>
          <button onClick={this.handleNext}>next</button>
          <Characters page={this.state.page} />
          <button onClick={this.handlePrevious}>previous</button>
          <button onClick={this.handleNext}>next</button>
        </section>
      </div>
    );
  }
}

export default App;
