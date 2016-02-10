"use strict";
import { connect } from "react-redux";
import CoachGridlist from "./coaches/CoachGridlist";
import ProductGridlist from "./products/ProductGridlist";

const Marketplace = ({ coaches, products }) => (
  <div className="mdl-grid mdl-grid--no-spacing">
    <div className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
      <ProductGridlist products={products} />
      <CoachGridlist coaches={coaches} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    coaches: state.coach.coaches,
    products: state.product.products
  };
};

export default connect(mapStateToProps)(Marketplace)
