"use strict";
import UserListItem from "./UserListItem";

const UserList = ({
  users
}) => {
  let items = [];
  for (let key in users) {
    if (users.hasOwnProperty(key)) {
      items.push(
        <UserListItem key={key} user={users[key]}/>
      );
    }
  }

  const styles = {
    headerElement: {
      margin: "0 0 10px 0",
      maxWidth: "800px",
      width: "25%"
    },
    list: {
      padding: "20px 0 0 0"
    }
  };

  return (
    <div className="block--center-horizontally__margin"
      style={styles.list}>
      <div className="block--center-horizontally__flex">
        <div style={styles.headerElement}>STATUS</div>
        <div style={styles.headerElement}>NAME</div>
        <div style={styles.headerElement}>PRODUCT</div>
        <div style={styles.headerElement}>CURRENT END DATE</div>
      </div>
      {items}
    </div>
  );
};

export default UserList
