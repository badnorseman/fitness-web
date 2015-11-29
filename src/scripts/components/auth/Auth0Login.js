"use strict";
import React, { Component } from "react";
// import Auth0Lock from "auth0-lock";
import { connect } from "react-redux";
import { login } from "../../actions/auth0Actions";
import Auth0Variables from "../../constants/auth0Variables";

class Auth0Login extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock(
      Auth0Variables.AUTH0_CLIENT_ID,
      Auth0Variables.AUTH0_DOMAIN
    );
  }

  _handleClick(event) {
    event.preventDefault();

    this.lock.showSignin({
      gravatar: false
    }, (error, profile, token) => {
      this.props.dispatch(login(error, profile, token));
    });
  }

  render() {
    return (
      <a onClick={this._handleClick}>
        Login
      </a>
    );
  }
}

export default connect()(Auth0Login);
