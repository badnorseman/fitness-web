"use strict";
import { connect } from "react-redux";
import { destroyProduct, updateProduct } from "../../actions/product_actions";
import Productform from "./Productform";

const EditProduct = ({ product, dispatch }) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
      <div className="mdl-card__supporting-text">
        <Productform
          product={product}
          onRemove={(id) => dispatch(destroyProduct(id))}
          onSubmit={(product) => dispatch(updateProduct(product))}
        />
      </div>
      <div className="mdl-card__actions mdl-card--border">
      </div>
    </div>
  </div>
);

export default connect()(EditProduct)
