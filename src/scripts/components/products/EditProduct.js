"use strict";
import { connect } from "react-redux";
import { goTo } from "../../actions/router_actions";
import { destroyProduct, updateProduct } from "../../actions/product_actions";
import Link from "../Link";
import ProductForm from "./ProductForm";

const EditProduct = ({ product, dispatch }) => {
  const styles = {
    card: {
      height: "auto",
      maxWidth: "800px",
      width: "800px"
    }
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp center"
        style={styles.card}>
        <div className="mdl-card__menu">
          <Link
            styles="mdl-button mdl-js-button mdl-button--icon"
            onClick={() => dispatch(goTo("DASHBOARD"))}
          >
            <i className="zmdi zmdi-close"></i>
          </Link>
        </div>
        <div className="mdl-card__supporting-text">
          <ProductForm
            product={product}
            onRemove={(id) => dispatch(destroyProduct(id))}
            onSubmit={(product) => dispatch(updateProduct(product))}
          />
        </div>
      </div>
    </div>
  );
};

export default connect()(EditProduct)
