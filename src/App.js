import React, { Component } from 'react';
import Routes from './client/routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <h1 className="rect">TOPMOST</h1>
        <Routes />
      </div>
    );
  }
}
export default App;
