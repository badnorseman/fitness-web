"use strict";
import React, { Component, PropTypes } from "react";
import TransactionListItem from "./TransactionListItem";

export default class TransactionList extends Component {
  static propTypes = {
    transactions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTransactions();
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
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div>
              TRANSACTION DATE
              <div className="divider"></div>
              AMOUNT
              <div className="divider"></div>
              TRANSACTION ID
            </div>
            {items}
          </div>
        </div>
      </div>
    )
  }
}
