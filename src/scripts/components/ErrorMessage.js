"use strict";
import { connect } from "react-redux";
import { resetErrorMessage } from "../actions/error_actions";
import Link from "./Link";

const ErrorMessage = ({
  errorMessage,
  onClick
}) => (
  <div>
    {errorMessage}
    {errorMessage && <Link
      styles="mdl-button mdl-js-button mdl-button--icon"
      onClick={onClick}
    >
      <i className="zmdi zmdi-close"></i>
    </Link>}
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
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
)(ErrorMessage)
