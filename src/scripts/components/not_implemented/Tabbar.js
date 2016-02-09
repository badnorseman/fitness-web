"use strict";
import Link from "./Link";

const Tabbar = ({ currentUser }) => {
  const { coach, id } = currentUser;
  const isLoggedIn = (id) ? true : false;

  return (
    <div className="mdl-layout__tab-bar">
      {coach && <Link route="DASHBOARD" styles="mdl-layout__tab is-active">
        Dashboard
      </Link>}
      {coach && <Link route="PRODUCTLIST" styles="mdl-layout__tab">
        Products
      </Link>}
      {coach && <Link route="USERLIST" styles="mdl-layout__tab">
        Customers
      </Link>}
      {coach && <Link route="TRANSACTIONLIST" styles="mdl-layout__tab">
        Payments
      </Link>}
    </div>
  );
};

export default Tabbar
