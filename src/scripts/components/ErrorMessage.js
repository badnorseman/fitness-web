"use strict";
import { connect } from "react-redux";
import { resetErrorMessage } from "../actions/error_actions";

const ErrorMessage = ({ errorMessage, dispatch }) => (
  <div>
    {errorMessage && <div>
      {errorMessage}
      <button type="button"
        className="mdl-button mdl-js-button mdl-button--icon"
        onClick={() => dispatch(resetErrorMessage())}
      >
        <i className="zmdi zmdi-close"></i>
      </button>
    </div>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage
  };
};

export default connect(mapStateToProps)(ErrorMessage)
