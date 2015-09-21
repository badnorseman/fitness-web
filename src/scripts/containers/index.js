import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import * as authActions from "../actions/authActions";
import App from "../components";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, authActions), dispatch);
}

function mapStateToProps(state) {
  const { errorMessage, routeReducer, sessionReducer } = state;
  const { route } = routeReducer;
  const { currentUser, isLoggedIn } = sessionReducer;
  return { currentUser, errorMessage, isLoggedIn, route };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
