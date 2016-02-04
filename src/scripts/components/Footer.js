"use strict";
import Link from "./Link2";
import "./footer.css";

const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer>
      <div className="mdl-mini-footer footer__top">
        <ul className="mdl-mini-footer__link-list">
          <li><Link route="ABOUT">About</Link></li>
          <li><Link route="HELP">Help</Link></li>
          <li><Link route="TERMS">Terms</Link></li>
        </ul>
      </div>
      <div className="mdl-mini-footer footer__middle">
        <ul className="mdl-mini-footer__link-list">
          <li><Facebook /></li>
          <li><Twitter /></li>
          <li><Instagram /></li>
          <li><Email /></li>
        </ul>
      </div>
      <div className="mdl-mini-footer footer__bottom">
        Copyright&nbsp;{currentYear}&nbsp;FitBird
      </div>
    </footer>
  );
};

const Email = () => (
  <a href="mailto:hello@fitbird.com">
    <i className="zmdi zmdi-email zmdi-hc-2x"></i>
  </a>
);

const Facebook = () => {
  const onClick = () => {
    FB.ui({
      method: "share",
      href: "https://developers.facebook.com/docs/"
    }, function(response){});
  };

  return (
    <a href="#!" onClick={() => onClick()}>
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

const Twitter = () => (
  <a href="https://twitter.com/intent/tweet?via=fitbirdinc">
    <i className="zmdi zmdi-twitter zmdi-hc-2x"></i>
  </a>
);

export default Footer
