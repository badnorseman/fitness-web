"use strict";
import React, { Component, PropTypes } from 'react';
import EditUser from '../users/EditUser';
import TransactionList from './TransactionList';

export default class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.currentUser.id);
    this.props.getTransactions();
  }

  render() {
    const { currentUser, transactions, user } = this.props;

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <EditUser user={user} />
          <TransactionList transactions={transactions} />
        </div>
      </div>
    );
  }
}
