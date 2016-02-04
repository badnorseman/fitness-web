"use strict";
import { connect } from "react-redux";
import CoachGridList from "./coaches/CoachGridList";
import ProductGridList from "./products/ProductGridList";

const Marketplace = ({ coaches, products }) => (
  <div>
    <ProductGridList products={products} />
    <CoachGridList coaches={coaches} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    coaches: state.coach.coaches,
    products: state.product.products
  };
};

export default connect(mapStateToProps)(Marketplace)
