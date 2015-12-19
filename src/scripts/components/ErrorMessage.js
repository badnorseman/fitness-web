"use strict";
import { connect } from "react-redux";
import { resetErrorMessage } from "../actions/error_actions";
import IconButton from "./IconButton";

const ErrorMessage = ({
  errorMessage,
  onClick
}) => (
  <div>
    {errorMessage}
    {errorMessage && <IconButton
      name="close"
      onClick={() => { onClick; }}
    />}
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
