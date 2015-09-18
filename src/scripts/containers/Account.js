import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getTransactions } from "../actions/transactionActions";
import Account from "../components/account";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTransactions }, dispatch);
}

function mapStateToProps(state) {
  const { authReducer, transactionReducer } = state;
  const { user } = authReducer;
  const { isFetching, transactions } = transactionReducer;
  return { isFetching, transactions, user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
