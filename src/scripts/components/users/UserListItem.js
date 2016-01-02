"use strict";

const UserListItem = ({
  user
}) => {
  const { name } = user;

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
      <div className="block--center-horizontally__flex">
        <div style={styles.itemElement}>{name}</div>
        <div style={styles.itemElement}>Status</div>
        <div style={styles.itemElement}>Product</div>
        <div style={styles.itemElement}>Current end date</div>
      </div>
    </div>
  );
};

export default UserListItem
