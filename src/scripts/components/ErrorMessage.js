"use strict";
import { connect } from "react-redux";
import { resetErrorMessage } from "../actions/error_actions";
import Link from "./Link";

const ErrorMessage = ({ errorMessage, dispatch }) => (
  <div>
    {errorMessage && <div>
      {errorMessage}
      <Link styles="mdl-button mdl-js-button mdl-button--icon"
        onClick={() => dispatch(resetErrorMessage())}
      >
        <i className="zmdi zmdi-close"></i>
      </Link>
    </div>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage
  };
};

export default connect(mapStateToProps)(ErrorMessage)
