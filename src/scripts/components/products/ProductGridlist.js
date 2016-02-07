"use strict";
import ProductGridlistItem from "./ProductGridlistItem";

const ProductGridlist = ({ products }) => {
  let items = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      items.push(
        <ProductGridlistItem key={key} product={products[key]} />
      );
    }
  }

  return (
    <div className="mdl-grid">
      {items}
    </div>
  );
};

export default ProductGridlist
