import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import Transactions from "../components/transactions";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTransactions }, dispatch);
  // return bindActionCreators({ changeRoute, getTransactions}), dispatch);
}

function mapStateToProps(state) {
  const { transactionReducer } = state;
  const { isFetching, transactions } = transactionReducer;
  return { isFetching, transactions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
