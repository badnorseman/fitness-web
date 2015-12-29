"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const ShowProduct = ({
  product,
  onBuy,
  onClose
}) => {
  const { currency, description, image, name, price} = product;

  const cardStyle = {
    height: "auto",
    maxWidth: "800px",
    width: "800px"
  };

  const blockStyle = {
    float: "left",
    overflow: "hidden",
    width: "50%"
  };

  const imageStyle = {
    height: "320px",
    width: "320px"
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <div className="block--center-horizontally__margin mdl-card mdl-shadow--2dp"
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
            <div className="block--center-horizontally__flex">
              <div style={blockStyle}>
                <img src={image} alt="" style={imageStyle} />
              </div>
              <div style={blockStyle}>
                <div>
                  <h3>{name}</h3>
                  <h6>{currency} {price}</h6>
                </div>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  onClick={ev => {
                    ev.preventDefault();
                    onBuy(product);
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="mdl-card__supporting-text">
            <div>
              <h3>Description</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBuy: (product) => {
      dispatch(changeRoute("NEWTRANSACTION", product));
    },
    onClose: () => {
      dispatch(changeRoute("MARKETPLACE"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShowProduct)
