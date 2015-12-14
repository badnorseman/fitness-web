"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth0_actions";
import { AUTH0_VARIABLES } from "../../constants/auth0_variables";

class Auth0Login extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  componentWillMount() {
    this.lock = new Auth0Lock(
      AUTH0_VARIABLES.AUTH0_CLIENT_ID,
      AUTH0_VARIABLES.AUTH0_DOMAIN
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

export default connect()(Auth0Login)
