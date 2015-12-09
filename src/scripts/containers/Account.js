"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transaction_actions";
import Account from "../components/Account";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTransactions }, dispatch);
}

function mapStateToProps(state) {
  const { auth, transaction } = state;
  const { currentUser } = auth;
  const { transactions } = transaction;
  return { currentUser, transactions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
