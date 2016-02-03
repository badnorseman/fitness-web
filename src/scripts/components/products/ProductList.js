"use strict";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products, goTo }) => {
  let items = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      items.push(
        <ProductListItem key={key} product={products[key]} goTo={goTo} />
      );
    }
  }

  const styles = {
    button: {
      float: "right",
      margin: "50px 0 10px 0"
    }
  };

  return (
    <div>
      <ul className="mdl-list">
        {items}
      </ul>
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--accent"
        style={styles.button}
        onClick={() => goTo("NEWPRODUCT")}
      >
        <i className="zmdi zmdi-plus"></i>
      </button>
    </div>
  );
};

export default ProductList
