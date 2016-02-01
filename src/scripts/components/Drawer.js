"use strict";
import Link from "./Link";
import "./drawer.css";

const Drawer = ({ currentUser, goTo, logout }) => {
  const logo = "https://s3.amazonaws.com/images.fitbird.us/development/system/57.png";
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className="mdl-layout__drawer">
      <div className="drawer__header">
        {!isLoggedIn && <div>
          <img className="drawer__logo" src={logo} alt="" />
          &nbsp;FITBIRD
        </div>}
        {isLoggedIn && <div>
          <img className="drawer__avatar" src={avatar} alt="" />
          <div>{name}</div>
        </div>}
      </div>
      <nav className="mdl-navigation">
        {!isLoggedIn && <Link styles="mdl-navigation__link"
          onClick={() => goTo("LOGIN")}>Log in</Link>}
        {!isLoggedIn && <Link styles="mdl-navigation__link"
          onClick={() => goTo("SIGNUP")}>Sign up</Link>}
        {coach && <Link styles="mdl-navigation__link"
          onClick={() => goTo("DASHBOARD")}>Dashboard</Link>}
        {isLoggedIn && <Link styles="mdl-navigation__link"
          onClick={() => goTo("ACCOUNT")}>Account</Link>}
        {isLoggedIn && <Link styles="mdl-navigation__link"
          onClick={logout}>Log out</Link>}
      </nav>
      <div className="mdl-layout-spacer"></div>
      <div className="drawer__bottom">
        Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS
      </div>
    </div>
  );
};

export default Drawer
