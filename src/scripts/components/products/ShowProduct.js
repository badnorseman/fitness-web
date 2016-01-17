"use strict";
import Link from "../Link";

const ShowProduct = ({
  product,
  goTo
}) => {
  const { currency, description, image, name, price } = product;

  const styles ={
    card: {
      height: "auto",
      maxWidth: "800px",
      width: "800px"
    },
    block: {
      float: "left",
      overflow: "hidden",
      width: "50%"
    },
    image: {
      maxHeight: "160px",
      width: "320px"
    }
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col block--center-horizontally__margin"
        style={styles.card}>
        <div className="mdl-card__menu">
          <Link
            styles="mdl-button mdl-js-button mdl-button--icon"
            onClick={() => goTo("MARKETPLACE")}
          >
            <i className="zmdi zmdi-close"></i>
          </Link>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="block--center-horizontally__flex">
            <div style={styles.block}>
              <img src={image} alt="" style={styles.image} />
            </div>
            <div style={styles.block}>
              <div>
                <h3>{name}</h3>
                <h6>{currency} {price}</h6>
              </div>
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                onClick={ev => {
                  ev.preventDefault();
                  goTo("NEWTRANSACTION", product);
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
  );
};

export default ShowProduct
