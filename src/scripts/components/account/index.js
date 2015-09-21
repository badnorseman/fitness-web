"use strict";
import React, { Component, PropTypes } from "react";
import User from "./User";
import TransactionList from "./TransactionList";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleShow = this._handleShow.bind(this);
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  _handleEdit(user) {
    this.props.updateUser(user);
  }

  _handleShow() {
    this.props.getUser(this.props.user.id);
  }

  render() {
    const { currentUser, isFetching, transactions } = this.props;

    return (
      <div>
        <User
          user={currentUser}
          onShow={this._handleShow}
          onEdit={this._handleEdit} />
        <TransactionList transactions={transactions} />
      </div>
    );
  }
}
