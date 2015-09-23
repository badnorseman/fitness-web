"use strict";
import React, { Component, PropTypes } from "react";
import User from "./User";
import TransactionList from "./TransactionList";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this._handleEdit = this._handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.currentUser.id);
    this.props.getTransactions();
  }

  _handleEdit(user) {
    this.props.updateUser(user);
  }

  render() {
    const { currentUser, transactions, user } = this.props;

    return (
      <div>
        <User
          user={user}
          onEdit={this._handleEdit} />
        <TransactionList transactions={transactions} />
      </div>
    );
  }
}
