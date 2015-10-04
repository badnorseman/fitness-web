"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { oauth } from "../../actions/authActions";
import Button from "../Button";

class Google extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.dispatch(oauth("google_oauth2"));
  }

  render() {
    return (
      <Button name="Continue with Google" type="button" onClick={this._handleClick} />
    )
  }
}

export default connect()(Google);
