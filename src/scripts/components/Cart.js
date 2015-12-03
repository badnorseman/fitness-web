"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../actions/route_actions";
import IconButton from "./IconButton";

class Cart extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleClose() {
    this.props.dispatch(changeRoute("MARKETPLACE"));
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
            </div>
            <div className="mdl-card__menu">
              <IconButton name="close" onClick={this._handleClose} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Cart);
