import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

class Login extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="login__background">
          <div className="login__modal">
            <h1 className="login__modal__header">Rostered</h1>
            <form className="login__modal__login-form">
              <label className="login__modal__login-form__label">Username</label>
              <input id="username" className="login__modal__login-form__input" type="text" />
              <label className="login__modal__login-form__label">Password</label>
              <input id="password" className="login__modal__login-form__input" type="text" />
              <Link exact to="/home"><input id="submit-button" className="login__modal__login-form__button" type="submit" /></Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// <input id="submit-button" className="login__modal__login-form__button" type="submit" />
// LeagueStatStatic.propTypes = {
//   rank: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   isEditing: PropTypes.boolean
// };

export default Login;
