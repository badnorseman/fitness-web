"use strict";
import React, { Component, PropTypes } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import "./List.css";

export default class List extends Component {
  static propTypes = {
    header: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  _getItems() {
    let items = [];
    for (let key in this.props.items) {
      if (this.props.items.hasOwnProperty(key)) {
        items.push(
          <ListItem key={key} item={this.props.items[key]}/>
        );
      }
    }
    return items;
  }

  render() {
    let header = {};
    let items = this._getItems();

    return (
      <div className="list block--center-horizontally__margin">
        <ListHeader header={header}/>
        {items}
      </div>
    )
  }
}
