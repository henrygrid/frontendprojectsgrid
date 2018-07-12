import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Rostered</h1>
    </header>
  );
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

export default Header;
