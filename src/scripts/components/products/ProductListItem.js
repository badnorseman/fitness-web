"use strict";
import React, { Component, PropTypes } from "react";

export default class ProductListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect() {
    this.props.onSelect(this.props.item);
  }

  render() {
    const { item } = this.props;
    const { currency, name, price } = item;
    const itemElementStyle = {
      margin: "10px 10px 10px 0",
      maxWidth:"800px",
      width: "25%"
    }

    return (
      <div>
        <hr />
        <a className="block--center-horizontally__flex" onClick={this._handleSelect} href="#!">
          <div style={itemElementStyle}>name</div>
          <div style={itemElementStyle}>currency</div>
          <div style={itemElementStyle}>price</div>
          <div style={itemElementStyle}></div>
        </a>
      </div>
    )
  }
}
