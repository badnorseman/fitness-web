"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import { destroyProduct, updateProduct } from "../../actions/product_actions";
import Link from "../Link";
import ProductForm from "./ProductForm";

const EditProduct = ({
  product,
  onClose,
  onEdit,
  onRemove
}) => {
  const cardStyle = {
    height: "auto",
    maxWidth: "800px",
    width: "800px"
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-card mdl-shadow--2dp"
          style={cardStyle}>
          <div className="mdl-card__menu">
            <Link
              styles="mdl-button mdl-js-button mdl-button--icon"
              onClick={onClose}
            >
              <i className="zmdi zmdi-close"></i>
            </Link>
          </div>
          <div className="mdl-card__supporting-text">
            <ProductForm
              product={product}
              onRemove={onRemove}
              onSubmit={onEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

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
