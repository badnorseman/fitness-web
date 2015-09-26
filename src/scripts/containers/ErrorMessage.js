"use strict";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetErrorMessage } from '../actions/errorActions';
import ErrorMessage from '../components/ErrorMessage';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetErrorMessage }, dispatch);
}

function mapStateToProps(state) {
  const { errorMessage } = state;
  return { errorMessage };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
