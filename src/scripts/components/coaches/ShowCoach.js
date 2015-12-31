"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const ShowCoach = ({
  coach,
  onClose
}) => {
  // const { avatar, email, name } = coach;
  const avatar = "https://s3.amazonaws.com/images.fitbird.us/production/users/default/avatars/small.jpeg";
  const image = "https://s3.amazonaws.com/images.fitbird.us/production/products/default/images/small.png";
  const email = "hello@fitbird.com";
  const name = "Coach"

  const styles = {
    avatar: {
      borderRadius: "48px",
      height: "96px",
      width: "96px"
    },
    block: {
      float: "left",
      overflow: "hidden",
      width: "50%"
    },
    card: {
      height: "auto",
      maxWidth: "800px",
      width: "800px"
    },
    image: {
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "160px",
      WebkitTransition: "all",
      msTransition: "all"
    },
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <div className="block--center-horizontally__margin mdl-card mdl-shadow--2dp"
          style={styles.card}>
          <div className="mdl-card__menu">
            <Link
              styles="mdl-button mdl-js-button mdl-button--icon"
              onClick={onClose}
            >
              <i className="zmdi zmdi-close"></i>
            </Link>
          </div>
          <div className="mdl-card__title" style={styles.image}></div>
          <div className="mdl-card__supporting-text">
            <div className="block--center-horizontally__flex">
              <div style={styles.block}>
                <img src={avatar} alt="" style={styles.avatar} />
              </div>
              <div style={styles.block}>
                <div>
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mdl-card__supporting-text">
            <div>
              <h3>Contact</h3>
              <p>{email}</p>
            </div>
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

export default connect(
  null,
  mapDispatchToProps
)(ShowCoach)
