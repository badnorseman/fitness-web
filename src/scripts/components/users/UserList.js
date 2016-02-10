"use strict";
import { connect } from "react-redux";
import UserListItem from "./UserListItem";

const UserList = ({ users }) => {
  let items = [];
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      items.push(
        <UserListItem key={key} user={users[key]}/>
      );
    }
  }

  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--6-col-tablet mdl-cell--1-offset-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
        <ul className="mdl-list">
          {items}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  };
};

export default connect(mapStateToProps)(UserList)
