"use strict";
import React, { Component, PropTypes } from "react";
import Profile from "./Profile";
import TransactionList from "./TransactionList";

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this._handleClose = this._handleClose.bind(this);
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  _getProfile() {
    return (
      <Profile
        onClose={this._handleClose} />
    );
  }

  _getTransactionList(transactions) {
    return (
      <TransactionList
        transactions={transactions} />
    );
  }

  _handleClose() {
    this.props.changeRoute("LIST");
  }

  render() {
    const { id, isFetching, transactions, route } = this.props;

    let content;
    switch (route) {
      case "PROFILE":
        content = this._getProfile();
        break;
      default:
        content = this._getTransactionList(transactions);
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
