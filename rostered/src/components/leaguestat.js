import React, { Component } from 'react';
import $ from 'jquery';
import LeagueStatEditing from './leaguestatediting.js';
import LeagueStatStatic from './leaguestatstatic.js';
import PropTypes from 'prop-types';

class LeagueStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  editToggle () {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    let field;

    if (!this.state.isEditing) {
      field = <LeagueStatStatic
        rank={this.props.rank}
        name={this.props.name}
        value={this.props.value}
        onClick={() => this.editToggle()}
      />
    } else {
      field = <LeagueStatEditing
        rank={this.props.rank}
        name={this.props.name}
        value={this.props.value}
        onClick={() => this.editToggle()}
      />
    }

    return (
      <div className="panel__field">
          {field}
      </div>
    );
  }
}

// LeagueStat.propTypes = {
//   rank: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   isEditing: PropTypes.boolean
// };

export default LeagueStat;
