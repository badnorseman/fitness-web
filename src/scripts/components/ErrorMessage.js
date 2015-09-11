"use strict";
import React, { Component, PropTypes } from "react";
import Button from "./Button";

export default class ErrorMessage extends Component {
  static propTypes = {
    errorMessages: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.onClose = this._handleClose.bind(this);
  }

  _handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <div>
        {this.props.errorMessages}
        <Button name="Close" type="button" onClick={this._handleClose} />
      </div>
    )
  }
}
