"use strict";
import Link from "./Link";
import "./header.css";

const Header = ({ currentUser, logout }) => {
  const logo = "https://s3.amazonaws.com/images.fitbird.us/development/system/57.png";
  const { avatar, coach, id } = currentUser;
  const isLoggedIn = (id) ? true : false;

  return (
    <header className="mdl-layout__header mdl-layout__header--seamed">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">
          <Link route="MARKETPLACE" styles="mdl-navigation__link">
            <img className="header__logo" src={logo} alt="" />
            &nbsp;FITBIRD
          </Link>
        </span>
        <div className="mdl-layout-spacer"></div>
        {coach && <Link route="DASHBOARD" styles="mdl-navigation__link">
          Dashboard
        </Link>}
        {coach && <Link route="PRODUCTLIST" styles="mdl-navigation__link">
          Products
        </Link>}
        {coach && <Link route="USERLIST" styles="mdl-navigation__link">
          Customers
        </Link>}
        {coach && <Link route="TRANSACTIONLIST" styles="mdl-navigation__link">
          Payments
        </Link>}
        <nav className="mdl-navigation">
          {!isLoggedIn && <Link route="LOGIN" styles="mdl-navigation__link">
            Log in
          </Link>}
          {!isLoggedIn && <Link route="SIGNUP"styles="mdl-navigation__link">
            Sign up
          </Link>}
          {isLoggedIn && <div>
            <img className="header__avatar" src={avatar} alt="" />
            <button id="menu"
              className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon header__menu-button">
              <i className="zmdi zmdi-caret-down"></i>
            </button>
            <ul htmlFor="menu"
              className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right">
              <li>
                <Link route="ACCOUNT" styles="mdl-menu__item">Account</Link>
              </li>
              <li className="mdl-menu__item" onClick={logout}>Log out</li>
            </ul>
          </div>}
        </nav>
      </div>
    </header>
  );
};

export default Header
