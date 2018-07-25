import React, { Component } from 'react';
import unirest from 'unirest';
import firebase, { auth, provider } from './firebase.js';
import logo from './logo.svg';
import Login from './components/login.js';
import Container from './components/container.js';
import Dashboard from './components/dashboard/dashboard.js';
import LeagueDashboard from './components/league/dashboard.js';
import LeagueProfile from './components/league/profile.js';
import TeamDashboard from './components/team/dashboard.js';
import PlayerDashboard from './components/player/dashboard.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import $ from 'jquery';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: this.props.stats,
      leagues: this.props.stats.leagues,
      scorers: [],
      user: null
    };
  }

  handleLoginChange(e, name, value) {
    this.setState({
      [name]: value
    });
  }

  componentDidMount()  {
    const dataBase = firebase.database().ref('data');
    dataBase.on('value', (snapshot) => {
      let stats = snapshot.val();
      this.setState({stats:stats});
    });
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ user });
    //   }
    // });
    // let data = this.state.stats;
    // dataBase.push(data);
  }
  //   unirest.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/17-18/topscorers")
  //     .header("X-Mashape-Key", "CAPBosxyv2mshAgeJRPDSpJUrw1cp1kklHejsn3DArGDvA7miO")
  //     .header("X-Mashape-Host", "sportsop-soccer-sports-open-data-v1.p.mashape.com")
  //     .end(result => {
  //       this.setState({scorers: [
  //         {
  //           rank: 1,
  //           name: result.body.data.topscorers[0].fullname,
  //           goals: result.body.data.topscorers[0].goals
  //         },
  //         {
  //           rank: 2,
  //           name: result.body.data.topscorers[1].fullname,
  //           goals: result.body.data.topscorers[1].goals
  //         },
  //         {
  //           rank: 3,
  //           name: result.body.data.topscorers[2].fullname,
  //           goals: result.body.data.topscorers[2].goals
  //         },
  //       ]});
  //     });
  // }

  // onRankChange (i, rank) {
  //   this.state.stats.leagues[0].teams[i].rank = rank;
  //   this.setState(this.state);
  // }
  //
  // onNameChange (i, name) {
  //   this.state.stats.leagues[0].teams[i].name = name;
  //   this.setState(this.state);
  // }
  //
  // onRecordChange (i, record) {
  //   this.state.stats.leagues[0].teams[i].record = record;
  //   this.setState(this.state);
  // }

  logData () {
    console.log(this.state.leagues[0].teams[0].rank);
  }

  onStatChange (stats) {
      this.setState({
        stats: stats
      });
      let data = this.state.stats;
      firebase.database().ref().set({data});
  }

  login() {
    auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  render() {
    console.log(this.state.scorers);

    return (
      <BrowserRouter>
        <div className="App">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
          {this.state.user ?
            <Route exact path="/" render={ () => <Dashboard stats={this.state.stats} scorers={this.state.scorers} onStatChange={(stats) => this.onStatChange(stats)} handleLogout={() => this.logout() } />} />
            :
            <Route exact path="/" render={ () => <Login handleLogin={() => this.login() }/>} />
          }
          <Route path="/leagues" render={ ({match}) => <LeagueDashboard stats={this.state.stats} match={match} onStatChange={(stats) => this.onStatChange(stats)} />} />
          <Route path="/teams" render={ ({match}) => <TeamDashboard stats={this.state.stats} match={match} onStatChange={(stats) => this.onStatChange(stats)} />} />
          <Route path="/players" render={ () => <PlayerDashboard stats={this.state.stats} onStatChange={(stats) => this.onStatChange(stats)} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
