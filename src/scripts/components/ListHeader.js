"use strict";
import React, { Component, PropTypes } from "react";
import "./List.css";

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { header } = this.props;

    return (
      <div className="block--center-horizontally__flex">
        <div className="list__header"></div>
        <div className="list__header"></div>
        <div className="list__header"></div>
        <div className="list__header"></div>
      </div>
    )
  }
}
