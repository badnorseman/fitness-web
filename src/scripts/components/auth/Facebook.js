"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { oauth } from "../../actions/authActions";
import "./facebook.css";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    event.preventDefault();

    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        this._handleLogin(response.authResponse);
      } else {
        FB.login(response => {
          if (response.authResponse) {
            this._handleLogin(response.authResponse);
          };
        }, { scope: "public_profile,email,user_birthday" });
      };
    });
  }

  _handleLogin(response) {
    console.log(response);
    window.location = "http://localhost:3000/api/auth/facebook/callback";
    this.props.dispatch(changeRoute("MARKETPLACE"));
    // this.props.dispatch(oauth("facebook"));
  }

  render() {
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect facebook"
        type="button"
        onClick={this._handleClick}>
        Facebook
      </button>
    );
  }
}

export default connect()(Facebook);
