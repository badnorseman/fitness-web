"use strict";
import { connect } from "react-redux";
import { createProduct } from "../../actions/product_actions";
import Productform from "./Productform";

const NewProduct = ({ dispatch }) => (
  <div className="mdl-grid">
    <Productform
      onSubmit={(product) => dispatch(createProduct(product))}
    />
  </div>
);

export default connect()(NewProduct)
