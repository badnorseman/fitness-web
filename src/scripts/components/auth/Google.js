"use strict";
import React, { Component, PropTypes } from "react";
import "./google.css";

export default class Google extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    event.preventDefault();
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
