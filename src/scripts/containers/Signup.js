import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { signup } from "../actions/authActions";
import Signup from "../components/auth/Signup";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup }, dispatch);
}

export default connect(mapDispatchToProps)(Signup);
