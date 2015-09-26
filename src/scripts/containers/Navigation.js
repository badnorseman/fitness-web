"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeRoute } from '../actions/routeActions';
import * as authActions from '../actions/authActions';
import Navigation from '../components/Navigation';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, { changeRoute }, authActions), dispatch);
}

function mapStateToProps(state) {
  const { sessionReducer } = state;
  const { currentUser, isLoggedIn } = sessionReducer;
  return { currentUser, isLoggedIn };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
