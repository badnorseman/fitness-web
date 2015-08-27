import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { signup } from "../actions/authActions";
import Signup from "../components/auth/Signup";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup }, dispatch);
}

function mapStateToProps(state) {
  return { state.authReducer.errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
