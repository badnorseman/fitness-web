"use strict";
import ProductListItem from "./ProductListItem";

const ProductList = ({
  coach,
  products,
  goTo
}) => {
  let items = [];
  coach.products.forEach(el => {
    items.push(<ProductListItem key={el.id} product={products[el.id]} goTo={goTo} />);
  })
  // for (let key in products) {
  //   if (products.hasOwnProperty(key)) {
  //     items.push(
  //       <ProductListItem key={key} product={products[key]} goTo={goTo} />
  //     );
  //   }
  // }

  const styles = {
    button: {
      float: "right",
      margin: "50px 0 10px 0"
    },
    headerElement: {
      margin: "0 0 10px 0",
      maxWidth: "800px",
      width: "25%"
    },
    list: {
      padding: "20px 0 0 0"
    }
  };

  return (
    <div className="block--center-horizontally__margin"
      style={styles.list}>
      <div className="block--center-horizontally__flex">
        <div style={styles.headerElement}>NAME</div>
        <div style={styles.headerElement}>CURRENCY</div>
        <div style={styles.headerElement}>PRICE</div>
        <div style={styles.headerElement}>NUMBERS OF USERS</div>
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
