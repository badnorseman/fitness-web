"use strict";
import Link from "./Link";

const Sidebar = ({ currentUser, goTo, logout }) => {
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;
  const styles = {
    avatar: {
      height: "48px",
      marginBottom: "16px",
      width: "48px",
    },
    header: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      height: "151px",
      justifyContent: "flex-end",
      padding: "32px"
    },
    main: {
      border: "none"
    }
  };

  return (
    <div className="mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-200"
      style={styles.main}>
      <header style={styles.header}>
        {isLoggedIn && <div>
          <img src={avatar} alt="" style={styles.avatar} />
          <div>{name}</div>
        </div>}
      </header>
      <nav className="mdl-navigation mdl-color--blue-grey-800">
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
    </div>
  );
};

export default Sidebar
