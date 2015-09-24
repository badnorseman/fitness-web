import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { changeRoute } from "../actions/routeActions";
import * as authActions from "../actions/authActions";
import App from "../components/App";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, authActions), dispatch);
}

function mapStateToProps(state) {
  const { routeReducer } = state;
  const { route } = routeReducer;
  return { route };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
