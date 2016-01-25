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

  const styles = {
    main: {
      width: "60%"
    }
  };

  return (
    <div className="mdl-grid" style={styles.main}>
      {tiles}
    </div>
  );
};

export default ProductGridList
