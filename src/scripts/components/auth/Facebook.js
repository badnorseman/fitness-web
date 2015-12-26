"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { oauth } from "../../actions/auth_actions";
import Button from "../Button";
import "./facebook.css";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(ev) {
    ev.preventDefault();

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
      <Button
        styles="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect facebook"
        onClick={this._handleClick}
      >
        Facebook
      </Button>
    );
  }
}

export default connect()(Facebook)
