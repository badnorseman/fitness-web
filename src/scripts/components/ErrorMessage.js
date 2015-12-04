"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

export default class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.errorMessage}
      </div>
    )
  }
}
