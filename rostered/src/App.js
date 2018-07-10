import React, { Component } from 'react';
import logo from './logo.svg';
import Dashboard from './components/dashboard.js';
import $ from 'jquery';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: this.props.stats
    };
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
        <header className="App-header">

          <h1 className="App-title">Rostered</h1>
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
