"use strict";
import { connect } from "react-redux";
import { createProduct } from "../../actions/product_actions";
import Link from "../Link";
import ProductForm from "./ProductForm";

const NewProduct = ({ dispatch }) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp center">
      <div className="mdl-card__menu">
        <Link
          route="PRODUCTLIST"
          styles="mdl-button mdl-js-button mdl-button--icon"
        >
          <i className="zmdi zmdi-close"></i>
        </Link>
      </div>
      <div className="mdl-card__supporting-text">
        <ProductForm
          onSubmit={(product) => dispatch(createProduct(product))}
        />
      </div>
    </div>
  </div>
);

export default connect()(NewProduct)
