"use strict";
import { connect } from "react-redux";
import CoachGridlist from "./coaches/CoachGridlist2";
import ProductGridlist from "./products/ProductGridlist2";

const Marketplace = ({ coaches, products }) => (
  <div>
    <ProductGridlist products={products} />
    <CoachGridlist coaches={coaches} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    coaches: state.coach.coaches,
    products: state.product.products
  };
};

export default connect(mapStateToProps)(Marketplace)
