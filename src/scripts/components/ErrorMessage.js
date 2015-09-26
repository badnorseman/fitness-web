"use strict";
import React, { Component, PropTypes } from 'react';

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
