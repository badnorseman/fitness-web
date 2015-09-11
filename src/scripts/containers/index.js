import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import * as authActions from "../actions/authActions";
import App from "../components";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, authActions), dispatch);
}

function mapStateToProps(state) {
  const { authReducer, errorReducer, routeReducer } = state;
  const { errorMessage } = errorReducer;
  const { isLoggedIn, user } = authReducer;
  const { route } = routeReducer;
  return { errorMessage, isLoggedIn, route, user };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
