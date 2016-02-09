"use strict";
import EditLogin from "./auth/EditLogin";
import EditUser from "./auth/EditUser";

const Account = ({ currentUser }) => {
  const { login } = currentUser;

  return (
    <div className="mdl-grid">
      <EditUser user={currentUser} />
      {login && <EditLogin login={login} />}
    </div>
  );
};

export default Account
