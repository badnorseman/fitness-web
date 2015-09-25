"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetErrorMessage } from '../actions/errorActions';

class ErrorMessage extends Component {
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

function mapStateToProps(state) {
  const { errorMessage } = state;
  return { errorMessage };
}

export default connect(mapStateToProps)(ErrorMessage);
