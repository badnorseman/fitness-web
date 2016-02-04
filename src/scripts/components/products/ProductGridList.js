"use strict";
import ProductGridTile from "./ProductGridTile";

const ProductGridList = ({ products }) => {
  let tiles = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      tiles.push(
        <ProductGridTile key={key} product={products[key]} />
      );
    }
  }

  return (
    <div className="mdl-grid">
      {tiles}
    </div>
  );
};

export default ProductGridList
