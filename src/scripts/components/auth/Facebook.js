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

  _getUserInfo(response) {
    FB.api('/me', response => {
      console.log(response, JSON.stringify(response));
    })
  }

  _handleClick() {
    FB.login(response => {
      if (response.status === "connected") {
        // Logged into your app and Facebook.
        // It is safe to call oauth with access token response.authResponse.accessToken.
        // this.props.dispatch(oauth("facebook"));
        this._getUserInfo(response);
      } else if (response.status === "not_authorized") {
        // The person is logged into Facebook, but not your app.
        this.props.changeRoute("MARKETPLACE");
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        this.props.changeRoute("MARKETPLACE");
      }
    }, { scope: "public_profile,email,user_birthday" });
  }

  render() {
    return (
      <Button name="Continue with Facebook" type="button" onClick={this._handleClick} />
    );
  }
}

export default connect()(Facebook);
