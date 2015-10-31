"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { oauth } from "../../actions/authActions";
import "./google.css";

class Google extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.dispatch(oauth("google_oauth2"));
  }

  render() {
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect google"
        type="button"
        onClick={this._handleClick}>
        Google
      </button>
    )
  }
}

export default connect()(Google);
