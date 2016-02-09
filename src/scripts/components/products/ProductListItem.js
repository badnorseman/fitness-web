"use strict";
import { connect } from "react-redux";
import { destroyProduct } from "../../actions/product_actions";
import Link from "../Link";

const ProductListItem = ({ product, dispatch }) => {
  const { currency, description, id, image, name, price } = product;

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <img className="mdl-list__item-avatar" src={image} alt="" />
        <span>{name}</span>
        <span className="mdl-list__item-text-body">
          {description}&nbsp;{currency}&nbsp;{price}
        </span>
      </span>
      <span className="mdl-list__item-secondary-content">
        <span className="mdl-list__item-secondary-action">
          <button id={`product-list-menu${id}`}
            className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon header__menu-button">
            <i className="zmdi zmdi-more-vert"></i>
          </button>
          <ul htmlFor={`product-list-menu${id}`}
            className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right">
            <li>
              <Link route="EDITPRODUCT" param={product} styles="mdl-menu__item">
                Edit
              </Link>
            </li>
            <li className="mdl-menu__item"
              onClick={ev => {
                ev.preventDefault();
                dispatch(destroyProduct(id));
            }}>
              Delete
            </li>
          </ul>
        </span>
      </span>
    </li>
  );
};

export default connect()(ProductListItem)
