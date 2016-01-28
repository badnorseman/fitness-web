"use strict";
import Link from "./Link";
import "./footer.css";

const Footer = ({ goTo }) => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer>
      <div className="mdl-mini-footer footer__top">
        <ul className="mdl-mini-footer__link-list">
          <li><Link styles="mdl-navigation__link"
            onClick={() => goTo("ABOUT")}>ABOUT</Link></li>
          <li><Link styles="mdl-navigation__link"
            onClick={() => goTo("HELP")}>HELP</Link></li>
          <li><Link styles="mdl-navigation__link"
            onClick={() => goTo("TERMS")}>TERMS</Link></li>
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
        Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS
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
    <Link onClick={() => onClick()}>
      <i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i>
    </Link>
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
