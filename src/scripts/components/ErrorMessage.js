"use strict";
import { connect } from "react-redux";
import { resetErrorMessage } from "../actions/error_actions";
import Button from "./Button";

const ErrorMessage = ({
  errorMessage,
  onClick
}) => (
  <div>
    {errorMessage}
    {errorMessage && <Button
      styles="mdl-button mdl-js-button mdl-button--icon"
      onClick={onClick}
    >
      <i className="material-icons">close</i>
    </Button>}
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
