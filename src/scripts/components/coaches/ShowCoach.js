"use strict";
import { connect } from "react-redux";
import Link from "../Link";

const ShowCoach = ({
  coach,
  products,
  goTo
}) => {
  // const { avatar, email, name } = coach;
  const avatar = "https://s3.amazonaws.com/images.fitbird.us/production/users/default/avatars/normal.jpeg";
  const image = "https://s3.amazonaws.com/images.fitbird.us/production/products/default/images/normal.jpeg";
  const email = "hello@fitbird.com";
  const name = "Coach";

  const styles = {
    avatar: {
      borderRadius: "46px",
      marginTop: "46px",
      height: "92px",
      width: "92px"
    },
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
    },
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
        <div className="mdl-card__title" style={styles.image}>
          <img src={avatar} alt="" style={styles.avatar} />
        </div>
        <div className="mdl-card__supporting-text">
          <h3 className="mdl-card__title-text">{name}</h3>
          <h5 className="mdl-typography--subhead">Title</h5>
          <p>{email}</p>
        </div>
      </div>
      <ProductList
        coach={coach}
        products={products} />
    </div>
  );
};

const ProductList = ({
  coach,
  products
}) => {
  let items = [];
  coach.products.forEach(el => {
    items.push(<ProductListItem key={el.id} product={products[el.id]} />);
  })

  return (
    <div>
      {items}
    </div>
  );
};

const ProductListItem = ({
  product
}) => {
  const { currency, description, name, price } = product;

  const styles = {
    card: {
      height: "160px",
      width: "800px"
    }
  };

  return (
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp"
      style={styles.card}>
      <div className="mdl-card__supporting-text">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{currency}&nbsp;{price}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps
)(ShowCoach)
