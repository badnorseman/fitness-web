"use strict";
import Link from "../Link";

const ShowProduct = ({ currentUser, product }) => {
  const { currency, description, image, name, price } = product;
  const { id } = currentUser;
  const isLoggedIn = (id) ? true : false;

  const styles ={
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
      <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title" style={styles.image}></div>
        <div className="mdl-card__supporting-text">
          <h3 className="mdl-card__title-text">{name}</h3>
          <p>{description}</p>
          <h5 className="mdl-typography--subhead">{currency} {price}</h5>
        </div>
        <div className="mdl-card__actions">
          {isLoggedIn && <span>
            <Link
              route="NEWTRANSACTION"
              param={product}
              styles="mdl-button mdl-js-button mdl-js-ripple-effect"
            >
              Buy
            </Link>
          </span>}
          <Link
            route="MARKETPLACE"
            styles="mdl-button mdl-js-button mdl-js-ripple-effect"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct
