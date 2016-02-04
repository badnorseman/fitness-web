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
      <div className="mdl-cell mdl-cell--12-col">
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
