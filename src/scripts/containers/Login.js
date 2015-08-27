import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import Login from "../components/auth/Login";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

function mapStateToProps(state) {
  return { state.authReducer.errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
