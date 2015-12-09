"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transaction_actions";
import Account from "../components/Account";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTransactions }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.currentUser,
    transactions: state.transaction.transactions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
