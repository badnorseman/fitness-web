"use strict";
import React, { Component, PropTypes } from "react";

export default class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const style = {
      margin: "10px 10px 10px 0",
      maxWidth:"800px",
      width: "25%"
    }

    return (
      <div>
        <hr />
        <div className="block--center-horizontally__flex">
          <div style={style}></div>
          <div style={style}></div>
          <div style={style}></div>
          <div style={style}></div>
        </div>
      </div>
    )
  }
}
