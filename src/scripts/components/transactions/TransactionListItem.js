"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";

export default class TransactionListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    const { amount, currency, date, transaction_id } = item;
    const itemElementStyle = {
      margin: "10px 10px 10px 0",
      maxWidth:"800px",
      width: "25%"
    };

    return (
      <div>
        <hr />
        <div className="block--center-horizontally__flex">
          <div style={itemElementStyle}>{date}</div>
          <div style={itemElementStyle}>{currency}</div>
          <div style={itemElementStyle}>{amount}</div>
          <div style={itemElementStyle}>{transaction_id}</div>
        </div>
      </div>
    )
  }
}
