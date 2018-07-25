import React, { Component } from 'react';
import unirest from 'unirest';
import firebase, { auth, provider } from './firebase.js';
import logo from './logo.svg';
import Login from './components/login/login.js';
import Container from './components/container.js';
import Dashboard from './components/dashboard/dashboard.js';
import LeagueDashboard from './components/league/dashboard.js';
import LeagueProfile from './components/league/profile.js';
import TeamDashboard from './components/team/dashboard.js';
import PlayerDashboard from './components/player/dashboard.js';
import LoginForm from './components/login/loginform.js';
import SignupForm from './components/login/signupform.js';
import ResetPasswordEmail from './components/login/resetpasswordemail.js';
import ResetPasswordConfirm from './components/login/resetpasswordconfirm.js';
import {
  BrowserRouter,
  Route,
  Redirect
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
    //   console.log(user);
    //   if (user) {
    //     this.setState({ user });
    //   }
    // });
  }

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

  login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      this.setState({user});
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });
  }

  logout(e) {
    e.preventDefault();
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  addUser(email, username, password1, password2) {
    auth.createUserWithEmailAndPassword(email, password2).
    then((result) => {
      const user = result.user;
      this.setState({user});
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    });
  }

  render() {
    console.log(this.state.scorers);

    return (
      <BrowserRouter>
        <div className="App">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
          {this.state.user ?
            <div>
              <Route exact path="/" render={ () => <Redirect to="/home" />} />
              <Route exact path="/home" render={ () => <Dashboard stats={this.state.stats} scorers={this.state.scorers} onStatChange={(stats) => this.onStatChange(stats)} handleLogout={(e) => this.logout(e) } />} />
            </div>
            :
            <div className="container">
              <div className="login__background">
                <Route exact path="/home" render={ () => <Redirect to="/" />} />
                <Route exact path="/" render={ () => <LoginForm user={this.state.user} handleLogin={(email, password) => this.login(email, password) }/>} />
                <Route path="/signup" render={() => <SignupForm handleSignup={(email, username, password1, password2) => this.addUser(email, username, password1, password2) } />} />
                <Route path="/resetpassword" render={() => <ResetPasswordEmail />} />
                <Route path="/resetconfirm" render={() => <ResetPasswordConfirm />} />
              </div>
            </div>
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
