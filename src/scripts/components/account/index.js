"use strict";
import React, { Component, PropTypes } from "react";
import User from "./User";
import TransactionList from "./TransactionList";

export default class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  render() {
    const { isFetching, transactions, user } = this.props;

    return (
      <div>
        <User user={user} />
        <TransactionList transactions={transactions} />
      </div>
    );
  }
}
