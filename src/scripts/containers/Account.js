import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import Account from "../components/Account";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTransactions }, dispatch);
}

function mapStateToProps(state) {
  const { sessionReducer, transactionReducer } = state;
  const { currentUser } = sessionReducer;
  const { transactions } = transactionReducer;
  return { currentUser, transactions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
