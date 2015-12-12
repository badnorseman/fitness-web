"use strict";
import React, { Component, PropTypes } from "react";
import { render } from "react-dom";
import EditUser from "./users/EditUser";
import TransactionList from "./transactions/TransactionList";
import "./account.css";

export default class Account extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    transactions: PropTypes.object,
    getTransactions: PropTypes.func.isRequired
  }

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
          <div className="account-card block--center-horizontally__margin"><h3>Account</h3></div>
          <div className="account-card block--center-horizontally__margin mdl-card mdl-shadow--2dp">
            <div className="block--center-horizontally__margin mdl-card__supporting-text">
              <div className="mdl-tabs mdl-js-tabs">
                <div className="mdl-tabs__tab-bar">
                  <a href="#profile-panel" className="mdl-tabs__tab is-active">Profile</a>
                  <a href="#security-panel" className="mdl-tabs__tab">Security</a>
                  <a href="#payment-history-panel" className="mdl-tabs__tab">Payment History</a>
                </div>
                <div className="mdl-tabs__panel is-active" id="profile-panel">
                  <EditUser
                    user={currentUser}
                  />
                </div>
                <div className="mdl-tabs__panel" id="security-panel">
                  <p>Edit email and/or password. Current password is required.</p>
                </div>
                <div className="mdl-tabs__panel" id="payment-history-panel">
                  <TransactionList
                    transactions={transactions}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
