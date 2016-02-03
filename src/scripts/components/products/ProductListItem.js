"use strict";
import Link from "../Link";

const ProductListItem = ({ product, goTo }) => {
  const { currency, image, name, price } = product;

  return (
    <li className="mdl-list__item mdl-list__item--three-line">
      <span className="mdl-list__item-primary-content">
        <img className="mdl-list__item-avatar" src={image} alt="" />
        <span>{name}</span>
        <span className="mdl-list__item-text-body">
          {name}
          {currency}
          {price}
        </span>
      </span>
      <span className="mdl-list__item-secondary-content">
        <span className="mdl-list__item-secondary-action">
          <Link
            styles="mdl-button mdl-js-button mdl-button--icon"
            onClick={() => goTo("EDITPRODUCT", product)}
          >
            <i className="zmdi zmdi-edit"></i>
          </Link>
        </span>
      </span>
    </li>
  );
};

export default ProductListItem
