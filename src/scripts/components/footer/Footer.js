"use strict";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/router_actions";
import Link from "../Link";

const Footer = ({
  goToAbout,
  goToHelp,
  goToTerms
}) => (
  <div>
    <div className="mdl-mini-footer">
      <div className="mdl-mini-footer__left-section">
        <ul className="mdl-mini-footer__link-list">
          <li><Facebook /></li>
          <li><Twitter /></li>
          <li><Instagram /></li>
        </ul>
      </div>
      <div className="mdl-mini-footer__right-section">
        <ul className="mdl-mini-footer__link-list">
          <li><Link onClick={goToAbout}>About</Link></li>
          <li><Link onClick={goToHelp}>Help</Link></li>
          <li><Link onClick={goToTerms}>Privacy & Terms</Link></li>
        </ul>
      </div>
    </div>
    <Company />
  </div>
);

const Company = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className="mdl-mini-footer">
      <span>
        &copy;&nbsp;2014&ndash;{currentYear}&nbsp;&nbsp;
        FitBird&nbsp;ApS&nbsp;&nbsp;
        Esromgade&nbsp;15&nbsp;&nbsp;Suite&nbsp;1102&nbsp;&nbsp;
        2200&nbsp;Copenhagen&nbsp;N&nbsp;&nbsp;Denmark&nbsp;&nbsp;
        CVR&nbsp;35418067
      </span>
    </div>
  );
};

const Facebook = () => {
  const url = "https://www.facebook.com/dialog/feed?"
    + "app_id=722603254511776"
    + "&display=popup&caption=" + encodeURIComponent("FitBird")
    + "&link=" + encodeURIComponent("https://www.facebook.com/fitbirdinc")
    + "&redirect_uri=" + encodeURIComponent("https://www.facebook.com/")

  return (
    <a href={url}>
      <i className="zmdi zmdi-facebook"></i>
    </a>
  );
};

const Instagram = () => (
  <a>
    <i className="zmdi zmdi-instagram"></i>
  </a>
);

const Twitter = () => {
  const url = "https://twitter.com/intent/tweet?text="
    + encodeURIComponent("https://twitter.com/fitbirdinc");

  return (
    <a href={url}>
      <i className="zmdi zmdi-twitter"></i>
    </a>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToAbout: () => {
      dispatch(changeRoute("ABOUT"));
    },
    goToHelp: () => {
      dispatch(changeRoute("HELP"));
    },
    goToTerms: () => {
      dispatch(changeRoute("TERMS"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Footer)
