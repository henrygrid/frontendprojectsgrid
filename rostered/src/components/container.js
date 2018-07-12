import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header.js'
import Dashboard from './dashboard.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

class Container extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Dashboard stats={this.props.stats} onStatChange={(stats) => this.props.onStatChange(stats)} />
      </div>
    );
  }
}

// LeagueStatStatic.propTypes = {
//   rank: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   isEditing: PropTypes.boolean
// };

export default Container;
