"use strict";
import ProductGridTile from "./ProductGridTile";

const ProductGridList = ({
  products,
  onShow
}) => {
  let tiles = (products) => {
    let tiles = [];
    for (let key in products) {
      if (products.hasOwnProperty(key)) {
        tiles.push(
          <ProductGridTile key={key} product={products[key]} onShow={onShow} />
        );
      }
    }
    return tiles;
  }(products);

  const gridStyle = {
    padding: "0"
  };

  return (
    <div className="mdl-grid" style={gridStyle}>
      {tiles}
    </div>
  );
};

export default ProductGridList
