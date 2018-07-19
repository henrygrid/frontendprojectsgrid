import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Header from '../header.js';
import {
  Route,
  Link
} from 'react-router-dom';

class LeagueProfileEdit extends React.Component {


  onStatChange (e) {
    let title = document.getElementById('league-name').value;
    let createdDate = document.getElementById('league-created-date').value;
    this.props.onClick(e, title, createdDate);
  }

  toggleConfirm (e) {
    e.preventDefault();
    $("#actions").fadeOut();
    $("#delete-league").fadeIn();
  }

      render () {
        let league = this.props.league;

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
                  <dd className="profile__right__list__item__data">
                    <input id="league-name" className="profile__right__list__item__data__field" defaultValue={league.name} />
                  </dd>
                </div>
                <div className="profile__right__list__item">
                  <dt className="profile__right__list__item__title">Number of Teams</dt>
                  <dd className="profile__right__list__item__data">{league.teams.length}</dd>
                </div>
                <div className="profile__right__list__item">
                  <dt className="profile__right__list__item__title">Created</dt>
                  <dd className="profile__right__list__item__data">
                    <input id="league-created-date" className="profile__right__list__item__data__field" defaultValue={league.createdDate} />
                  </dd>
                </div>
              </dl>
              <div id="actions" className="profile__right__links">
                <div className="profile__right__links__header">Actions</div>
                <div className="profile__right__links__body">
                  <a href="" className="profile__right__links__body__link" onClick={(e) => this.onStatChange(e)}>Save</a>
                  <a href="" className="profile__right__links__body__link" onClick={(e) => this.props.onEditToggle(e)}>Cancel</a>
                  <a href="" className="profile__right__links__body__link" onClick={(e) => this.toggleConfirm(e)}>Delete League</a>
                </div>
              </div>
                <div id="delete-league"className="panel panel__full-width modal">
                  <div className="panel__header">
                    <h1 className="panel__title">Are you sure?</h1>
                  </div>
                  <div className="panel__body">
                    <div className="panel__message-wrapper">
                      <p className="panel__message">This action will delete this league which can&#39;t be undone. Delete this league?</p>
                      <div className="panel__actions">
                        <a href="" className="panel__actions__link">Yes</a>
                        <a href="" className="panel__actions__link">No</a>
                      </div>
                    </div>
                  </div>
              </div>
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

export default LeagueProfileEdit;
