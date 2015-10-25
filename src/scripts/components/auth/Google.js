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
      <Button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-cell mdl-cell--12-col  mdl-button--google-color" name="Google+" type="button" onClick={this._handleClick} />
    )
  }
}

export default connect()(Google);
