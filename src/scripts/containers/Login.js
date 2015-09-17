import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import Login from "../components/auth/Login";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapDispatchToProps)(Login);
