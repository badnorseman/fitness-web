// Show products in cart
// Add and remove products from cart
// Calculate total amount for all products in cart
"use strict";
import Link from "../Link";

const Cart = () => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
      <div className="mdl-card__menu">
        <Link route="MARKETPLACE"
          styles="mdl-button mdl-js-button mdl-button--icon"
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
