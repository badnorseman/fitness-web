"use strict";
import { connect } from "react-redux";
import { destroyProduct, updateProduct } from "../../actions/product_actions";
import Productform from "./Productform";

const EditProduct = ({ product, dispatch }) => (
  <div className="mdl-grid">
    <Productform
      product={product}
      onRemove={(id) => dispatch(destroyProduct(id))}
      onSubmit={(product) => dispatch(updateProduct(product))}
    />
  </div>
);

export default connect()(EditProduct)
