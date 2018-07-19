import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header.js';
import $ from 'jquery';
import {
  Route,
  Link
} from 'react-router-dom';

class LeagueProfileView extends React.Component {

      showAdd (e) {
        e.preventDefault();
        $("#addForm").slideDown();
      }

      hideAdd () {
        $("#addForm").slideUp();
      }

      showRemove (e) {
        e.preventDefault();
        $(".js-delete-team").fadeIn();
      }

      addTeam (e) {
        let teams = this.props.league.teams;
        let newTeam = document.getElementById("newTeam").value;
        let team = {
          name: newTeam
        };
        teams.push(team);
        this.props.handleTeamEdits(e, teams);
        $("#addForm").slideUp();
      }

      removeTeam (e) {
        e.preventDefault()
        let teams = this.props.league.teams;
        let clickedTeam = e.target.parentElement.parentElement.innerText;
        console.log(clickedTeam);
        teams.forEach(function(team, i) {
          console.log(team.name);
          if (team.name === clickedTeam) {
            teams.splice(i, 1);
          }
        });
        this.props.handleTeamEdits(e, teams);

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
                  <dd className="profile__right__list__item__data">{league.name}</dd>
                </div>
                <div className="profile__right__list__item">
                  <dt className="profile__right__list__item__title">Number of Teams</dt>
                  <dd className="profile__right__list__item__data">{league.teams.length}</dd>
                </div>
                <div className="profile__right__list__item">
                  <dt className="profile__right__list__item__title">Created</dt>
                  <dd className="profile__right__list__item__data">{league.createdDate}</dd>
                </div>
              </dl>
              <div className="profile__right__links">
                <div className="profile__right__links__header">Actions</div>
                <div className="profile__right__links__body">
                  <a href="" className="profile__right__links__body__link" onClick={this.props.onClick} >Edit League</a>
                  <a href="" className="profile__right__links__body__link" onClick={(e) => this.showAdd(e)}>Add Team</a>
                  <a href="" className="profile__right__links__body__link" onClick={(e) => this.showRemove(e)}>Remove Team</a>
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

                  <li className="panel__list__item">
                    <Link to={`teams/profile`} className="panel__list__item__title"><i className="fa fa-futbol panel__list__item__title__icon" aria-hidden="true"></i>{team.name}
                      <span className="right hidden js-delete-team">
                        <i className="fa fa-times red" onClick={(e) => this.removeTeam(e) }></i>
                      </span>
                    </Link>
                  </li>

              )}
                <li id="addForm" className="panel__list__item hidden">
                  <form className="panel__list__item__title" >
                    <input id="newTeam" className="panel__list__item__title__input" type="text" placeholder="Team Name"/>
                    <span className="right">
                      <i className="fa fa-check green margin-right-20" onClick={(e) => this.addTeam(e) }></i>
                      <i className="fa fa-times red" onClick={(e) => this.hideAdd(e) }></i>
                    </span>
                  </form>
                </li>
              </ul>
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

export default LeagueProfileView;
