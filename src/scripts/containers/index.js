import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import * as authActions from "../actions/authActions";
import App from "../components";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, authActions), dispatch);
}

function mapStateToProps(state) {
  const { errorReducer, authReducer, routeReducer } = state;
  const { errorMessages } = errorReducer || { errorMessages: [] };
  const { errors, isLoggedIn, user } = authReducer;
  const { route } = routeReducer;
  return { errorMessages, errors, isLoggedIn, route, user };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
