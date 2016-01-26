"use strict";

const UserListItem = ({ user }) => {
  const { name, product } = user;
  const styles = {
    itemElement: {
      margin: "10px 10px 10px 0",
      maxWidth:"800px",
      width: "25%"
    }
  };

  return (
    <div>
      <hr />
      <div className="flex--center">
        <div style={styles.itemElement}>{name}</div>
        <div style={styles.itemElement}>Status</div>
        <div style={styles.itemElement}>{product}</div>
        <div style={styles.itemElement}>Current end date</div>
      </div>
    </div>
  );
};

export default UserListItem
