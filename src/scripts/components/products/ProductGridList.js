"use strict";
import ProductGridTile from "./ProductGridTile";

const ProductGridList = ({
  products,
  onClick
}) => {
  let tiles = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      tiles.push(
        <ProductGridTile key={key} product={products[key]} onClick={onClick} />
      );
    }
  }

  const styles = {
    grid: {
      padding: "0"
    }
  };

  return (
    <div className="mdl-grid" style={styles.grid}>
      {tiles}
    </div>
  );
};

export default ProductGridList
