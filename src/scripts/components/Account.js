"use strict";
import { connect } from "react-redux";
import EditLogin from "./auth/EditLogin";
import EditUser from "./auth/EditUser";
import TransactionList from "./transactions/TransactionList";

const Account = ({ currentUser, transactions }) => {
  const { login } = currentUser;

  return (
    <div className="mdl-grid content--width">
      <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title flex--center">
          <div className="mdl-card__title-text">
            <h3>Account</h3>
          </div>
        </div>
        <div className="mdl-card__supporting-text center">
          <div className="mdl-tabs mdl-js-tabs">
            <div className="mdl-tabs__tab-bar">
              <a href="#profile-panel" className="mdl-tabs__tab is-active">
                Profile</a>
              {login && <a href="#login-panel" className="mdl-tabs__tab">
                Login</a>}
              <a href="#payment-history-panel" className="mdl-tabs__tab">
                Payment History</a>
            </div>
            <div className="mdl-tabs__panel is-active" id="profile-panel">
              <EditUser
                user={currentUser}
              />
            </div>
            {login && <div className="mdl-tabs__panel" id="login-panel">
              <EditLogin
                login={login}
              />
            </div>}
            <div className="mdl-tabs__panel" id="payment-history-panel">
              <TransactionList
                transactions={transactions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    transactions: state.transaction.transactions
  };
};

export default connect(
  mapStateToProps
)(Account)
