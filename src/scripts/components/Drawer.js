"use strict";
import Link from "./Link";
import "./drawer.css";

const Drawer = ({ currentUser, goTo, logout }) => {
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;
  const now = new Date();
  const currentYear = now.getFullYear();
  const styles = {
    avatar: {
      height: "48px",
      marginBottom: "16px",
      width: "48px"
    }
  };

  return (
    <div className="mdl-layout__drawer">
      <div className="drawer__header">
        {!isLoggedIn && <div>
          FitBird
        </div>}
        {isLoggedIn && <div>
          <img src={avatar} alt="" style={styles.avatar} />
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
      <div>
        Copyright&nbsp;{currentYear}&nbsp;FitBird&nbsp;ApS
      </div>
    </div>
  );
};

export default Drawer
