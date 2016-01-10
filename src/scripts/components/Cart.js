"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import Link from "./Link";

const Cart = ({
  goTo
}) => (
  <div className="mdl-grid">
    <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
      <div className="mdl-card__menu">
        <Link
          styles="mdl-button mdl-js-button mdl-button--icon"
          onClick={() => goTo("MARKETPLACE")}
        >
          <i className="zmdi zmdi-close"></i>
        </Link>
      </div>
      <div className="mdl-card__supporting-text">
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    goTo: (route) => {
      dispatch(changeRoute(route));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cart)
