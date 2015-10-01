"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { oauth } from "../../actions/authActions";
import Button from "../Button";

class Oauth extends Component {
  static propTypes = {
    provider: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this._handleOauth = this._handleOauth.bind(this);
  }

  _handleOauth() {
    this.props.dispatch(oauth(this.props.provider));
  }

  render() {
    return (
      <Button name={this.props.provider} type="button" onClick={this._handleOauth} />
    )
  }
}

export default connect()(Oauth);
