"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../actions/router_actions";
import IconButton from "./IconButton";

const Cart = ({ dispatch }) => {
  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
          </div>
          <div className="mdl-card__menu">
            <IconButton
              name="close"
              onClick={() => {
                dispatch(changeRoute("MARKETPLACE"));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
Cart = connect()(Cart);

export default Cart
