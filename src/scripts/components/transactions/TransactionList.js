"use strict";
import React, { Component, PropTypes } from "react";
import TransactionListItem from "./TransactionListItem";
import "./TransactionList.css";

export default class TransactionList extends Component {
  static propTypes = {
    transactions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  _getItems() {
    let items = [];
    for (let key in this.props.transactions) {
      if (this.props.transactions.hasOwnProperty(key)) {
        items.push(
          <TransactionListItem key={key} item={this.props.transactions[key]}/>
        );
      }
    }
    return items;
  }

  render() {
    let items = this._getItems();

    return (
      <div className="transaction-list block--center-horizontally__margin">
        <div className="block--center-horizontally__flex">
          <div className="transaction-list__header">DATE</div>
          <div className="transaction-list__header">CURRENCY</div>
          <div className="transaction-list__header">AMOUNT</div>
          <div className="transaction-list__header">TRANSACTION ID</div>
        </div>
        {items}
      </div>
    )
  }
}
