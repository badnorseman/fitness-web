"use strict";
import { connect } from "react-redux";
import { oauth } from "../../actions/auth_actions";
import "./facebook.css";

const Facebook = ({ dispatch }) => (
  <button
    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect facebook"
    onClick={ev => {
      ev.preventDefault();
      loginFacebook(dispatch);
    }}
  >
    Facebook
  </button>
);

const loginFacebook = (dispatch) => {
  FB.getLoginStatus(response => {
    if (response.status === "connected") {
      dispatch(oauth("facebook"));
    } else {
      FB.login(response => {
        if (response.authSuccess) {
          dispatch(oauth("facebook"));
        };
      }, { scope: "email,public_profile", info_fields: "email,name" });
    };
  });
};

export default connect()(Facebook)
