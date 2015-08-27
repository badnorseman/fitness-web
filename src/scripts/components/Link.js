"use strict";
import React, { Component, PropTypes } from "react";

export default class Link extends Component {
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
      <a
        className="mdl-navigation__link"
        href="#"
        onClick={this._handleClick}>
        {this.props.name}
      </a>
    )
  }
}
