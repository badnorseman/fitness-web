"use strict";
import React, { Component, PropTypes } from 'react';
import TransactionListItem from './TransactionListItem';
import './TransactionList.css';

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
      <div className="transaction-list-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text mdl-card--border">
          <table className="mdl-data-table mdl-js-data-table">
            <thead>
              <tr>
                <th className="mdl-data-table__cell--non-numeric">TRANSACTION DATE</th>
                <th className="mdl-data-table__cell--non-numeric">CURRENCY</th>
                <th className="mdl-data-table__cell--non-numeric">AMOUNT</th>
                <th className="mdl-data-table__cell--non-numeric">TRANSACTION ID</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
