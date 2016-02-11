"use strict";
import { connect } from "react-redux";
import Link from "../Link";
import ProductGridlist from "../products/ProductGridlist";

const ShowUser = ({ user, products }) => {
  let productsByUser = {};
  user.products.forEach(el => {
    if (products[el.id]) { productsByUser[el.id] = products[el.id]; }
  });

  const { avatar, email, name } = user;
  const styles = {
    avatar: {
      borderRadius: "46px",
      height: "92px",
      width: "92px"
    }
  };

  return (
    <div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
            <img src={avatar} alt="" style={styles.avatar} />
            <h3 className="mdl-card__title-text">{name}</h3>
            <p>{email}</p>
          </div>
          <div className="mdl-card__actions">
            <Link
              route="USERLIST"
              styles="mdl-button mdl-js-button mdl-js-ripple-effect"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
          <ProductGridlist products={products} />
        </div>
      </div>
    </div>
  );
};

ShowUser.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

export default connect(mapStateToProps)(ShowUser)
