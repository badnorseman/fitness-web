"use strict";
import { connect } from "react-redux";
import { destroyProduct, updateProduct } from "../../actions/product_actions";
import Productform from "./Productform";

const EditProduct = ({ product, dispatch }) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp center">
      <div className="mdl-card__supporting-text">
        <Productform
          product={product}
          onRemove={(id) => dispatch(destroyProduct(id))}
          onSubmit={(product) => dispatch(updateProduct(product))}
        />
      </div>
    </div>
  </div>
);

export default connect()(EditProduct)
