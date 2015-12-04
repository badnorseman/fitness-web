"use strict";
import $ from "jquery";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

export default class IconButton extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--icon"
        onClick={this._handleClick}>
          <i className="material-icons">{this.props.name}</i>
      </button>
    )
  }
}
