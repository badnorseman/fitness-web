"use strict";
import { connect } from "react-redux";
import { createProduct } from "../../actions/product_actions";
import Productform from "./Productform";

const NewProduct = ({ dispatch }) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp center">
      <div className="mdl-card__supporting-text">
        <Productform
          onSubmit={(product) => dispatch(createProduct(product))}
        />
      </div>
    </div>
  </div>
);

export default connect()(NewProduct)
