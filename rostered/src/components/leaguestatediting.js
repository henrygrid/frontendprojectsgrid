import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class LeagueStatEditing extends React.Component {

  render() {
    return (
      <div className="panel__field__stats">
          <span className="panel__field__rank editing-container">
            <input className="panel__field__stat panel__field__stat__rank--input stat--editing" defaultValue={this.props.rank} />
          </span>
          <span className="panel__field__name editing-container">
            <input className="panel__field__stat panel__field__stat__name--input stat--editing" defaultValue={this.props.name} />
          </span>
          <span className="panel__field__value editing-container">
            <input className="panel__field__stat panel__field__stat__value--input stat--editing" defaultValue={this.props.value} />
          </span>
          <div className="panel__field__links">
            <i className="fa fa-save" aria-hidden="true" onClick={() => this.props.onClick()}></i>
          </div>
      </div>
    );
  }
}

// LeagueStatEditing.propTypes = {
//   rank: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   isEditing: PropTypes.boolean
// };

export default LeagueStatEditing;
