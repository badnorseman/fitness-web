"use strict";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTransactions } from "../actions/transaction_actions";
import Account from "../components/Account";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTransactions
  }, dispatch);
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
)(Account);
