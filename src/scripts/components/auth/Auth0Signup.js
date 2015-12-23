"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth0_actions";
import { AUTH0_VARIABLES } from "../../constants/auth0_variables";

class Auth0Signup extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this.lock = new Auth0Lock(
      AUTH0_VARIABLES.AUTH0_CLIENT_ID,
      AUTH0_VARIABLES.AUTH0_DOMAIN
    );
  }

  _handleClick(ev) {
    ev.preventDefault();

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

export default connect()(Auth0Signup)
