"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import Link from "./Link";

const Cart = ({
  onClick
}) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__menu">
          <Link
            styles="mdl-button mdl-js-button mdl-button--icon"
            onClick={onClick}
          >
            <i className="material-icons">close</i>
          </Link>
        </div>
        <div className="mdl-card__supporting-text">
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(changeRoute("MARKETPLACE"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cart)
