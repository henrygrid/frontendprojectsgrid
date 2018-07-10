import React, { Component } from 'react';
import League from './league.js';
import Team from './team.js';
import Player from './player.js';
import $ from 'jquery';

class Dashboard extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        rank: null,
        name: null,
        value: null
      };
    }

    toggleStats = (e) => {
      var el = e.target;
      $(el).next(".panel__sublist").slideToggle();
    }

    render() {
      return (
        <section className="content">
          <div className="search__wrapper">
            <input type="text" className="search__input" />
            <a href="" className="search__submit"><span>Search</span></a>
          </div>
          <h1 className="content__header">Dashboard</h1>
          <League />
          <Team />
          <Player />
        </section>
      );
    }
  }

Dashboard.propTypes = {

}


export default Dashboard;
