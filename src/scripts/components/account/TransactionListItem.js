"use strict";
import React, { Component, PropTypes } from 'react';
import './TransactionList.css';

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
      <div className="transaction-list-item flex--center">
        <div className="transaction-list-item__data">{date}</div>
        <div className="transaction-list-item__data">{currency}</div>
        <div className="transaction-list-item__data">{amount}</div>
        <div className="transaction-list-item__data">{transaction_id}</div>
      </div>
    )
  }
}
