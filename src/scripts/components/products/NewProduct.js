"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { createProduct } from "../../actions/product_actions";
import ProductForm from "./ProductForm";
import IconButton from "../IconButton";
import "./products.css";

const NewProduct = ({
  onAdd,
  onClose
}) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col">
      <div className="product-card mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text">
          <ProductForm
            onSubmit={onAdd}
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
    onAdd: (product) => {
      dispatch(createProduct(product));
    },
    onClose: () => {
      dispatch(changeRoute("DASHBOARD"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewProduct)
