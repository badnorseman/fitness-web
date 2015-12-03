"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { oauth } from "../../actions/auth_actions";
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
        }, { scope: "email,public_profile", info_fields: "email,name" });
      };
    });
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
