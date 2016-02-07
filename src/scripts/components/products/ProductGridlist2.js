"use strict";
import ProductTile from "./ProductTile";

const ProductGridlist = ({ products }) => {
  let tiles = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      tiles.push(
        <ProductTile key={key} product={products[key]} />
      );
    }
  }

  return (
    <div className="mdl-grid">
      {tiles}
    </div>
  );
};

export default ProductGridlist
