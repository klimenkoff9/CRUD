import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/routes/RoutesContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
