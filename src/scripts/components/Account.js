"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transaction_actions";
import EditUser from "./users/EditUser";
import TransactionList from "./transactions/TransactionList";

class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { currentUser, transactions } = this.props;

    const styles = {
      card: {
        height: "auto",
        width: "80%"
      }
    };

    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="block--center-horizontally__margin"
            style={styles.card}>
            <h3>Account</h3>
          </div>
          <div className="mdl-card mdl-shadow--2dp block--center-horizontally__margin"
            style={styles.card}>
            <div className="mdl-card__supporting-text block--center-horizontally__margin">
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

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => {
      dispatch(getTransactions());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    transactions: state.transaction.transactions
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)
