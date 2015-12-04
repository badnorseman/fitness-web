"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import UserListItem from "./UserListItem";

export default class UserList extends Component {
  static propTypes = {
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
          <UserListItem key={key} item={this.props.items[key]}/>
        );
      }
    }
    return items;
  }

  render() {
    let items = this._getItems();
    const listStyle = {
      padding: "50px 0 0 0"
    }
    const headerElementStyle = {
      margin: "0 10px 10px 0",
      maxWidth: "800px",
      width: "25%"
    }

    return (
      <div className="block--center-horizontally__margin" style={listStyle}>
        <div className="block--center-horizontally__flex">
          <div style={headerElementStyle}>STATUS</div>
          <div style={headerElementStyle}>NAME</div>
          <div style={headerElementStyle}>PRODUCT</div>
          <div style={headerElementStyle}>CURRENT END DATE</div>
        </div>
        {items}
      </div>
    )
  }
}
