"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { destroyProduct, updateProduct } from "../../actions/product_actions";
import ProductForm from "./ProductForm";
import Button from "../Button";
import IconButton from "../IconButton";
import "./products.css";

const EditProduct = ({
  product,
  onClose,
  onEdit,
  onRemove
}) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
      <div className="product-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text">
          <Button
            name="Remove"
            type="button"
            onClick={ev => {
              ev.preventDefault();
              onRemove(product.id);
            }}
          />

          <ProductForm
            product={product}
            onSubmit={onEdit}
          />
        </div>
        <div className="mdl-card__menu">
          <IconButton
            name="close"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(changeRoute("DASHBOARD"));
    },
    onEdit: (product) => {
      dispatch(updateProduct(product));
    },
    onRemove: (id) => {
      dispatch(destroyProduct(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditProduct)
