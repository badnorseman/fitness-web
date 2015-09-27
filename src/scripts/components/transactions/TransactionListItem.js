"use strict";
import React, { Component, PropTypes } from "react";
import "./transactions.css";

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

    return (
      <div>
        <hr />
        <div className="transaction-list-item block--center-horizontally__flex">
          <div className="transaction-list-item__data">{date}</div>
          <div className="transaction-list-item__data">{currency}</div>
          <div className="transaction-list-item__data">{amount}</div>
          <div className="transaction-list-item__data">{transaction_id}</div>
        </div>
      </div>
    )
  }
}