"use strict";
import { connect } from "react-redux";
import { resetErrorMessage } from "../actions/error_actions";
import ErrorMessage from "../components/ErrorMessage";

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(resetErrorMessage());
    }
  };
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage);
