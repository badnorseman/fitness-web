"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const ShowCoach = ({
  coach,
  products,
  onClose
}) => {
  // const { avatar, email, name } = coach;
  const avatar = "https://s3.amazonaws.com/images.fitbird.us/production/users/default/avatars/small.jpeg";
  const image = "https://s3.amazonaws.com/images.fitbird.us/production/products/default/images/small.png";
  const email = "hello@fitbird.com";
  const name = "Coach";

  coach.products.forEach(el => {
    console.log(products[el.id]);
  });

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
      marginBottom: "10px",
      marginRight: "10px",
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
          <div>
            <h3>{name}</h3>
          </div>
        </div>
      </div>
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col"
        style={styles.card}>
        <div className="mdl-card__supporting-text">
          <div>
            <h3>Contact</h3>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
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
