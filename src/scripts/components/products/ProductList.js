"use strict";
import { connect } from "react-redux";
import ProductListItem from "./ProductListItem";
import Link from "../Link";

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
      <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text">
          <ul className="mdl-list">
            {items}
          </ul>
        </div>
        <div className="mdl-card__actions">
          <Link
            route="NEWPRODUCT"
            styles="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"
          >
            New Product
          </Link>
        </div>
      </div>
    </div>
  );
};

const filterProductsByCoach = (coach, products) => {
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
    products: filterProductsByCoach(
      state.coach.coaches[state.auth.currentUser.id],
      state.product.products)
  };
};

export default connect(mapStateToProps)(ProductList)
