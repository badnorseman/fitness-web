"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

export default class UserListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props.item;
    const itemElementStyle = {
      margin: "10px 10px 10px 0",
      maxWidth:"800px",
      width: "25%"
    }

    return (
      <div>
        <hr />
        <div className="block--center-horizontally__flex">
          <div style={itemElementStyle}>{name}</div>
          <div style={itemElementStyle}>Status</div>
          <div style={itemElementStyle}>Product</div>
          <div style={itemElementStyle}>Current end date</div>
        </div>
      </div>
    )
  }
}
