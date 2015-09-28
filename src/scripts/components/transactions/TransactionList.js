"use strict";
import React, { Component, PropTypes } from "react";
import TransactionListHeader from "./TransactionListHeader";
import TransactionListItem from "./TransactionListItem";
import "./transactions.css";

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
    let header = {};

    return (
      <div className="transaction-list block--center mdl-card mdl-shadow--2dp">
        <div className="block--center mdl-card__supporting-text mdl-card--border">
          <h4>Payment History</h4>
          <br />
          <TransactionListHeader header={header}/>
          {items}
        </div>
      </div>
    )
  }
}
