"use strict";
import { connect } from "react-redux";
import { createProduct } from "../../actions/product_actions";
import Productform from "./Productform";

const NewProduct = ({ dispatch }) => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
      <div className="mdl-card__supporting-text">
        <Productform
          onSubmit={(product) => dispatch(createProduct(product))}
        />
      </div>
    </div>
  </div>
);

export default connect()(NewProduct)
