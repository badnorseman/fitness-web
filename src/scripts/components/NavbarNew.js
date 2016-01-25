"use strict";
import Link from "./Link";

const Navbar = ({ currentUser, goTo, logout }) => {
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;
  const styles = {
    avatar: {
      height: "32px",
      width: "32px",
    }
  };

  return (
    <nav className="mdl-navigation mdl-layout--large-screen-only">
      {!isLoggedIn && <Link styles="mdl-navigation__link"
        onClick={() => goTo("LOGIN")}>Log in</Link>}
      {!isLoggedIn && <Link styles="mdl-navigation__link"
        onClick={() => goTo("SIGNUP")}>Sign up</Link>}
      {isLoggedIn && <div>
        <img src={avatar} alt="" style={styles.avatar} />
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
          id="menu">
          <i className="zmdi zmdi-more-vert zmdi-hc-lg"></i>
        </button>
        <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right"
          htmlFor="menu">
          <li><Link styles="mdl-menu__item"
            onClick={() => goTo("ACCOUNT")}>Account</Link></li>
          <li className="mdl-menu__item" onClick={logout}>Log out</li>
        </ul>
      </div>}
    </nav>
  );
};

export default Navbar
