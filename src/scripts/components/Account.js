"use strict";
import EditLogin from "./auth/EditLogin";
import EditUser from "./auth/EditUser";

const Account = ({ currentUser }) => {
  const { login } = currentUser;

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title flex--center">
          <div className="mdl-card__title-text">
            <h3>Account</h3>
          </div>
        </div>
        <div className="mdl-card__supporting-text center">
          <EditUser user={currentUser} />
          {login && <EditLogin login={login} />}
        </div>
      </div>
    </div>
  );
};

export default Account
