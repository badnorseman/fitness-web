"use strict";
import $ from "jquery";
import React, { Component, PropTypes } from "react";

export default class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    onClick: $.noop
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
        className={"mdl-button mdl-js-button mdl-js-ripple-effect " + this.props.className}
        type={this.props.type}
        onClick={this._handleClick}>
        {this.props.name}
      </button>
    )
  }
}
