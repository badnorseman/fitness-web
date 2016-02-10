"use strict";
import ProductListMenu from "./ProductListMenu";

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
          <ProductListMenu product={product} />
        </span>
      </span>
    </li>
  );
};

export default ProductListItem
