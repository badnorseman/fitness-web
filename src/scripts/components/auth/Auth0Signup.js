"use strict";
import React, { Component } from "react";
// import Auth0Lock from "auth0-lock";
import { connect } from "react-redux";
import { signup } from "../../actions/auth0_actions";
import Auth0Variables from "../../constants/auth0_variables";

class Auth0Signup extends Component {
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

    this.lock.showSignup({
    }, (error, profile, token) => {
      this.props.dispatch(signup(error, profile, token));
    });
  }

  render() {
    return (
      <a onClick={this._handleClick}>
        Signup
      </a>
    );
  }
}

export default connect()(Auth0Signup);
