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
    <ul className="mdl-list">
      {items}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  };
};

export default connect(mapStateToProps)(UserList)
