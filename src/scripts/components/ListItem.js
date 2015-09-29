"use strict";
import React, { Component, PropTypes } from "react";
import "./List.css";

export default class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        <hr />
        <div className="block--center-horizontally__flex">
          <div className="list__item"></div>
          <div className="list__item"></div>
          <div className="list__item"></div>
          <div className="list__item"></div>
        </div>
      </div>
    )
  }
}
