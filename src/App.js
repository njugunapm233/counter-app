import React, { Component } from 'react';
import MoviesComponent from './services/moviesComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container bg-success">
        <MoviesComponent />
      </main>
    );
  }
}

export default App;
