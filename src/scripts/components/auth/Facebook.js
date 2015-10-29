"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { oauth } from "../../actions/authActions";
import Button from "../Button";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    event.preventDefault();

    let login;

    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        login = response.authResponse;
        this.props.dispatch(oauth("facebook", login.signedRequest));
      }
    });

    if (!login) {
      FB.login(response => {
        if (response.authResponse) {
          login = response.authResponse;
          this.props.dispatch(oauth("facebook", login.signedRequest));
        }
      }, { scope: "public_profile,email,user_birthday" });
    }
  }

  render() {
    return (

      <Button name="Facebook" type="button" className="mdl-cell mdl-cell--12-col mdl-button--raised auth__facebook" onClick={this._handleClick} />
    );
  }
}

export default connect()(Facebook);
