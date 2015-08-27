import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import TransactionList from "../components/transactions/TransactionList";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTransactions }, dispatch);
}

function mapStateToProps(state) {
  const { transactionReducer } = state;
  const { errors, isFetching, transactions } = transactionReducer;
  return { errors, isFetching, transactions };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
