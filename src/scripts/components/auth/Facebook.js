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
      if (response.status === "connected") login = response;
    });

    if (!login) {
      FB.login(response => {
        if (response.authResponse) login = response;
      }, { scope: "public_profile,email,user_birthday" });
    }

    console.log("login", login);

    if (login) {
      this.props.dispatch(oauth("facebook", login.authResponse.signedRequest));
    }
  }

  // Do we need to crete a fbsr cookie?
  // _setCookie(name, value, days) {
  //   if (days) {
  //     let date = new Date();
  //     date.setTime(date.getTime() + (days*24*60*60*1000));
  //     let expires = `; expires=${date.toUTCString()}`; // UTC or GMT?
  //   } else let expires = "";
  //   document.cookie=`fbsr_${name}=${value} ${expires}`;
  // }

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
