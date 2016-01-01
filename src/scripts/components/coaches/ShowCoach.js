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
      float: "right",
      marginTop: "160px",
      height: "96px",
      width: "96px"
    },
    card: {
      height: "auto",
      margin: "0 auto",
      marginBottom: "10px",
      marginRight: "10px",
      maxWidth: "800px",
      minHeight: "320px",
      width: "800px"
    },
    image: {
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "320px",
      width: "auto",
      WebkitTransition: "all",
      msTransition: "all"
    },
  };

  return (
    <div className="mdl-grid">
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col"
        style={styles.card}>
        <div className="mdl-card__supporting-text" style={styles.image}>
          <img src={avatar} alt="" style={styles.avatar} />
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

export default connect(
  null,
  mapDispatchToProps
)(ShowCoach)
