import React, { Component } from 'react';
import LeagueStat from './leaguestat.js';
import $ from 'jquery';

class LeagueCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // stats: [
      //   {
      //     rank: 1,
      //     name: 'Wombats',
      //     value: '6-1'
      //   },
      //   {
      //     rank: 2,
      //     name: 'Cavaliers',
      //     value: '5-2'
      //   },
      //   {
      //     rank: 3,
      //     name: 'Hornets',
      //     value: '4-3'
      //   }
      // ],
      // isEditing: false
    };
  }

  // editToggle () {
  //   this.setState({
  //     isEditing: !this.state.isEditing
  //   });
  // }

  toggleStats = (e) => {
    var el = e.target;
    $(el).next(".panel__sublist").slideToggle();
  }

  render() {

    var stats = [
      {
        rank: 1,
        name: 'Wombats',
        value: '6-1'
      },
      {
        rank: 2,
        name: 'Cavaliers',
        value: '5-2'
      },
      {
        rank: 3,
        name: 'Hornets',
        value: '4-3'
      }
    ];

    return (
      <li className="panel__list__item">
        <h2 className="panel__list__item__title" onClick={((e) => this.toggleStats(e))}>Standings</h2>
        <ul className="panel__sublist">
          <li className="panel__sublist__item">
            <div className="panel__list__item__header">
              <span className="panel__list__item__header--rank">Rank</span>
              <span className="panel__list__item__header--team">Team</span>
              <span className="panel__list__item__header--record">Record</span>
            </div>

            {stats.map(stat => <LeagueStat
              key={stat.rank}
              rank={stat.rank}
              name={stat.name}
              value={stat.value}
              onClick={() => this.editToggle()}
            />)}
          </li>
        </ul>
      </li>
    );
  }
}

LeagueCategory.propTypes = {

}

export default LeagueCategory;
