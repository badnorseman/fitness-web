"use strict";
import Link from "../Link";

const ShowProduct = ({ product, goTo }) => {
  const { currency, description, image, name, price } = product;

  const styles ={
    card: {
      height: "auto",
      width: "800px"
    },
    image: {
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "160px",
      width: "auto",
      WebkitTransition: "all",
      msTransition: "all"
    }
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp block--center-horizontally__margin"
        style={styles.card}>
        <div className="mdl-card__menu">
          <Link
            styles="mdl-button mdl-js-button mdl-button--icon"
            onClick={() => goTo("MARKETPLACE")}
          >
            <i className="zmdi zmdi-close"></i>
          </Link>
        </div>
        <div className="mdl-card__title" style={styles.image}></div>
        <div className="mdl-card__supporting-text">
          <div>
            <h3 className="mdl-card__title-text">{name}</h3>
            <p>{description}</p>
            <h5 className="mdl-typography--subhead">{currency} {price}</h5>
          </div>
          <div>
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
    </div>
  );
};

export default ShowProduct
