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
          <li><Link onClick={goToTerms}>Terms of Use</Link></li>
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
        &copy;&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS&nbsp;&nbsp;
        Esromgade&nbsp;15&nbsp;&nbsp;Suite&nbsp;1102&nbsp;&nbsp;
        2200&nbsp;Copenhagen&nbsp;N&nbsp;&nbsp;Denmark&nbsp;&nbsp;
        CVR&nbsp;35418067
      </span>
    </div>
  );
};

const Facebook = () => {
  const onClick = () => {
    FB.ui({
      method: "share",
      href: "https://developers.facebook.com/docs/",
    }, function(response){});
  };

  return (
    <a href="#!"
      onClick={ev => {
        ev.preventDefault();
        onClick();
      }}
    >
      <i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
    </a>
  );
};

const Instagram = () => (
  <a href="https://www.instagram.com/fitbirdinc/"
    target="_blank">
    <i className="zmdi zmdi-instagram zmdi-hc-2x"></i>
  </a>
);

const Twitter = () => {
  const url = "https://twitter.com/intent/tweet";
  const text = encodeURIComponent("FitBird");
  const via = encodeURIComponent("fitbirdinc");
  const href = `${url}?text=${text}&via=${via}`;

  return (
    <a href={href}
      onClick={ev => {
        ev.preventDefault();
      }}
    >
      <i className="zmdi zmdi-twitter zmdi-hc-2x"></i>
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
