"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import { updateUser } from "../actions/userActions";
import Account from "../components/account/Account";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTransactions, updateUser }, dispatch);
}

function mapStateToProps(state) {
  const { sessionReducer, transactionReducer } = state;
  const { currentUser } = sessionReducer;
  const { transactions } = transactionReducer;
  return { currentUser, transactions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
