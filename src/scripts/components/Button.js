"use strict";
import $ from "jquery";
import React, { Component, PropTypes } from "react";
import "./Button.css";

export default class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    onClick: $.noop
  }

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    if (!this.props.className) {
      this.props.className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
    }
  }

  _handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button
        disabled = {this.props.disabled}
        className={this.props.className}
        type={this.props.type}
        onClick={this._handleClick}>
        {this.props.icon}
        {this.props.name}
      </button>
    )
  }
}
