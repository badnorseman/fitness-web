"use strict";
import ProductListItem from "./ProductListItem";
import styles from "./styles";

const ProductList = ({
  products,
  goTo
}) => {
  let items = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      items.push(
        <ProductListItem key={key} product={products[key]} goTo={goTo} />
      );
    }
  }

  return (
    <div className="block--center-horizontally__margin"
      style={styles.list}>
      <div className="block--center-horizontally__flex">
        <div style={styles.headerElement}>NAME</div>
        <div style={styles.headerElement}>CURRENCY</div>
        <div style={styles.headerElement}>PRICE</div>
        <div style={styles.headerElement}>NUMBERS OF CUSTOMERS</div>
      </div>
      {items}
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
        style={styles.button}
        onClick={() => goTo("NEWPRODUCT")}
      >
        <i className="zmdi zmdi-plus"></i>
      </button>
    </div>
  );
};

export default ProductList
