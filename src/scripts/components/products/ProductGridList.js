"use strict";
import ProductGridTile from "./ProductGridTile";

const ProductGridList = ({ products, goTo }) => {
  let tiles = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      tiles.push(
        <ProductGridTile key={key} product={products[key]} goTo={goTo} />
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
