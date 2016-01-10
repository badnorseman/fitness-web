"use strict";
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

export default Cart
