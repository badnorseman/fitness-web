"use strict";
import { connect } from "react-redux";
import { oauth } from "../../actions/auth_actions";
import "./facebook.css";

const Facebook = ({
  onClick
}) => (
  <button
    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect facebook-button"
    onClick={ev => {
      ev.preventDefault();
      onClick();
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
        if (response.authResponse) {
          dispatch(oauth("facebook"));
        };
      }, { scope: "email,public_profile", info_fields: "email,name" });
    };
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      loginFacebook(dispatch);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Facebook)
