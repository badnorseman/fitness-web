"use strict";
import Link from "../Link2";

const ProductListItem = ({ product }) => {
  const { currency, description, image, name, price } = product;

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
          <button
            className="mdl-button mdl-js-button mdl-button--icon"
          >
            <i className="zmdi zmdi-delete"></i>
          </button>
          <Link
            route="EDITPRODUCT"
            param={product}
            styles="mdl-button mdl-js-button mdl-button--icon"
          >
            <i className="zmdi zmdi-edit"></i>
          </Link>
        </span>
      </span>
    </li>
  );
};

export default ProductListItem
