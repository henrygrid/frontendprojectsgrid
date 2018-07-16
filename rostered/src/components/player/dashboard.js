import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

class PlayerDashboard extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <div className="search__wrapper">
            <input type="text" className="search__input" />
            <a href="" className="search__submit"><span>Search Players</span></a>
          </div>
        </div>
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

export default PlayerDashboard;
