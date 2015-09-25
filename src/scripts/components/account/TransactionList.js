"use strict";
import React, { Component, PropTypes } from 'react';
import TransactionListItem from './TransactionListItem';
import TransactionListHeader from './TransactionListHeader';
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
    let header = {};

    return (
      <div className="transaction-list block--center mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text mdl-card--border">
          <TransactionListHeader header={header}/>
          {items}
        </div>
      </div>
    )
  }
}
