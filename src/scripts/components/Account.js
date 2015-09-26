"use strict";
import React, { Component, PropTypes } from "react";
import EditUser from "./users/EditUser";
import TransactionList from "./transactions/TransactionList";

export default class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { currentUser, transactions } = this.props;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <EditUser user={currentUser} />
          <br />
          <TransactionList transactions={transactions} />
        </div>
      </div>
    );
  }
}
