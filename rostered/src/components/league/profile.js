import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header.js';
import {
  Route,
  Link
} from 'react-router-dom';

const LeagueProfile = (props) => {
      let id = props.match.params.id;
      let league = props.stats.leagues[id];

      return (
      <div className="profile__container">
        <div className="profile">
          <div className="profile__left">
            <h1 className="profile__left__title">{league.name}</h1>
            <div className="profile__left__image">
              <img src="http://lorempixel.com/200/200/sports" />
            </div>
          </div>
          <div className="profile__right">
            <dl className="profile__right__list">
              <div className="profile__right__list__item">
                <dt className="profile__right__list__item__title">League Name</dt>
                <dd className="profile__right__list__item__data">{league.name}</dd>
              </div>
              <div className="profile__right__list__item">
                <dt className="profile__right__list__item__title">Number of Teams</dt>
                <dd className="profile__right__list__item__data">{league.teams.length}</dd>
              </div>
              <div className="profile__right__list__item">
                <dt className="profile__right__list__item__title">Created</dt>
                <dd className="profile__right__list__item__data">10/17/05</dd>
              </div>
            </dl>
            <div className="profile__right__links">
              <div className="profile__right__links__header">Actions</div>
              <div className="profile__right__links__body">
                <a href="" className="profile__right__links__body__link">Edit League</a>
                <a href="" className="profile__right__links__body__link">Add Team</a>
                <a href="" className="profile__right__links__body__link">Remove Team</a>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel__full-width">
          <div className="panel__header">
            <h1 className="panel__title">Standings</h1>
          </div>
          <div className="panel__body">
            <ul className="panel__list">
            {league.teams.map((team, i) =>

                <li className="panel__list__item"><Link to={`${props.match.url}/profile`} className="panel__list__item__title"><i className="fa fa-socer" aria-hidden="true"></i> {team.name}</Link></li>

            )}
            </ul>
          </div>
        </div>
      </div>
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

export default LeagueProfile;
