"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const ShowCoach = ({
  coach,
  products,
  goTo
}) => {
  // const { avatar, email, name } = coach;
  const avatar = "https://s3.amazonaws.com/images.fitbird.us/production/users/default/avatars/small.jpeg";
  const image = "https://s3.amazonaws.com/images.fitbird.us/production/products/default/images/small.png";
  const email = "hello@fitbird.com";
  const name = "Coach";

  const styles = {
    avatar: {
      borderRadius: "96px",
      float: "right",
      marginTop: "96px",
      height: "192px",
      width: "192px"
    },
    card: {
      height: "320px",
      width: "800px"
    },
    grid: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column"
    },
    image: {
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "auto",
      WebkitTransition: "all",
      msTransition: "all"
    },
  };

  return (
    <div className="mdl-grid"
      style={styles.grid}>
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col"
        style={styles.card}>
        <div className="mdl-card__supporting-text"
          style={styles.image}>
          <img src={avatar} alt=""
            style={styles.avatar} />
        </div>
      </div>
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col"
        style={styles.card}>
        <div className="mdl-card__supporting-text">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col"
        style={styles.card}>
        <div className="mdl-card__supporting-text">
          <h3>Contact</h3>
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
      height: "320px",
      width: "800px"
    }
  };

  return (
    <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col"
      style={styles.card}>
      <div className="mdl-card__supporting-text">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{currency}&nbsp;{price}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    goTo: () => {
      dispatch(changeRoute("MARKETPLACE"));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCoach)
