"use strict";
import { connect } from "react-redux";
import { destroyProduct } from "../../actions/product_actions";
import Link from "../Link";

const ProductListMenu = ({ product, dispatch }) => (
  <div>
    <button id={`product-list-menu${product.id}`}
      className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
      <i className="zmdi zmdi-more-vert"></i>
    </button>
    <ul htmlFor={`product-list-menu${product.id}`}
      className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right">
      <li>
        <Link route="EDITPRODUCT" param={product} styles="mdl-menu__item">
          Edit
        </Link>
      </li>
      <li className="mdl-menu__item"
        onClick={ev => {
          ev.preventDefault();
          dispatch(destroyProduct(product.id));
      }}>
        Delete
      </li>
    </ul>
  </div>
);

export default connect()(ProductListMenu)
