"use strict";
import { connect } from "react-redux";
import ProductListItem from "./ProductListItem";
import Link from "../Link2";

const ProductList = ({ products }) => {
  let items = [];
  for (let key in products) {
    if (products.hasOwnProperty(key)) {
      items.push(
        <ProductListItem key={key} product={products[key]} />
      );
    }
  }

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <ul className="mdl-list">
          {items}
        </ul>
        <Link
          route="NEWPRODUCT"
          styles="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--accent"
        >
          <i className="zmdi zmdi-plus"></i>
        </Link>
      </div>
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
