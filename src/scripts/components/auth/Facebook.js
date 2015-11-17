"use strict";
import React, { Component } from "react";
import $ from "jquery";
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
        this.props.dispatch(oauth("facebook"));
      } else {
        FB.login(response => {
          if (response.authResponse) {
            this.props.dispatch(oauth("facebook"));
          };
        }, { scope: "public_profile,email,user_birthday" });
      };
    });
  }

  _handleLogin(response) {
    // const url = "http://localhost:3000/api/auth/facebook/callback";
    // $.ajax({
    //   url: url,
    //   xhrFields: { withCredentials: true },
    //   async: false,
    //   dataType: "json",
    //   type: "GET",
    //   success: (data, textStatus, xhr) => { console.log(data); },
    //   error: (error, textStatus, errorThrown) => { console.error(error, textStatus, errorThrown); }
    // });
    // window.location = url;
    // this.props.dispatch(changeRoute("MARKETPLACE"));
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
