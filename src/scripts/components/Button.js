"use strict";
import $ from "jquery";
import React, { Component, PropTypes } from "react";

export default class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = {
    onClick: $.noop
  }

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick={this._handleClick}>
        {this.props.name}
      </button>
    )
  }
}
