"use strict";
import { connect } from "react-redux";
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

  return (
    <div>
      <ul className="mdl-list">
        {items}
      </ul>
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--accent"
        onClick={() => goTo("NEWPRODUCT")}
      >
        <i className="zmdi zmdi-plus"></i>
      </button>
    </div>
  );
};

const getProductsByCoach = (coach, products) => {
  let productsByCoach = {};
  coach.products.forEach(el => {
    if (products[el.id]) {
      productsByCoach[el.id] = products[el.id];
    }
  })
  return productsByCoach;
};

const mapStateToProps = (state) => {
  return {
    products: getProductsByCoach(
      state.coach.coaches[state.auth.currentUser.id],
      state.product.products)
  };
};

export default connect(mapStateToProps)(ProductList)
