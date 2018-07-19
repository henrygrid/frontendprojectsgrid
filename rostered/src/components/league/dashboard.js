import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header.js';
import LeagueProfile from './profile.js';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom';

class LeagueDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var match = this.props.match;

    return (
      <div className="container">
        <Header />
        <section className="content">
          <div className="search__wrapper">
            <input type="text" className="search__input" />
            <a href="" className="search__submit"><span>Search</span></a>
          </div>
          <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/dashboard`} />} />
          <Route exact path={`${match.path}/dashboard`} render={ () => <LeagueDashboardTable stats={this.props.stats} onStatChange={(stats) => this.props.onStatChange(stats)} match={this.props.match} />} />
          <Route exact path={`${match.path}/profile/:id`} render={ ({match}) => <LeagueProfile stats={this.props.stats} onStatChange={(stats) => this.props.onStatChange(stats)} match={match} />} />
        </section>
      </div>
    );
  }
}

class LeagueDashboardTable extends React.Component {

  render() {


    return (
      <div className="panel panel__full-width">
        <div className="panel__header">
          <h1 className="panel__title">Leagues</h1>
        </div>
        <div className="panel__body">
          <ul className="panel__list">
          {this.props.stats.leagues.map((league, i) =>

              <li className="panel__list__item"><Link to={`${this.props.match.url}/profile/${i}`} className="panel__list__item__title"><i className={league.icon} aria-hidden="true"></i> {league.name}</Link></li>

          )}
          </ul>
        </div>
      </div>
    );
  }
}

// const LeagueProfileLink = ({match}) => {
//
//     return (
//
//     );
// }



// LeagueStatStatic.propTypes = {
//   rank: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   isEditing: PropTypes.boolean
// };

export default LeagueDashboard;
