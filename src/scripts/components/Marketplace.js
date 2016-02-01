"use strict";
import { connect } from "react-redux";
import CoachGridList from "./coaches/CoachGridList";
import ProductGridList from "./products/ProductGridList";
import List from "./list/List";

const Marketplace = ({ coaches, products, goTo }) => (
  <div>
    <ProductGridList
      products={products}
      goTo={goTo}
    />
    <CoachGridList
      coaches={coaches}
      goTo={goTo}
    />
    <List
      users={coaches}
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    coaches: state.coach.coaches,
    products: state.product.products
  };
};

export default connect(
  mapStateToProps
)(Marketplace)
