"use strict";
import React, { Component, PropTypes } from "react";

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { header } = this.props;
    const style = {
      margin: "0 10px 10px 0",
      maxWidth:"800px",
      width: "25%"
    }

    return (
      <div className="block--center-horizontally__flex">
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
        <div style={style}></div>
      </div>
    )
  }
}
