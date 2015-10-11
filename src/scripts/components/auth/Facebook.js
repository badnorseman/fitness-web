"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { oauth } from "../../actions/authActions";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    event.preventDefault();

    let login;

    FB.getLoginStatus(response => {
      if (response.status === "connected") login = response.authResponse;
    });

    if (!login) {
      FB.login(response => {
        if (response.authResponse) login = response.authResponse;
      }, { scope: "public_profile,email,user_birthday" });
    }

    if (login) {
      this.props.dispatch(oauth("facebook", login.signedRequest));
    }
  }

  render() {
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        type="button"
        onClick={this._handleClick}>
        Facebook
      </button>
    );
  }
}

export default connect()(Facebook);
