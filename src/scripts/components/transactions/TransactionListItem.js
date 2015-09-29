"use strict";
import React, { Component, PropTypes } from "react";
import "./TransactionList.css";

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
        <div className="block--center-horizontally__flex">
          <div className="transaction-list__item">{date}</div>
          <div className="transaction-list__item">{currency}</div>
          <div className="transaction-list__item">{amount}</div>
          <div className="transaction-list__item">{transaction_id}</div>
        </div>
      </div>
    )
  }
}
