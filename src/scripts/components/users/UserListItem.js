"use strict";

const UserListItem = ({
  user
}) => {
  const { name } = user;

  const itemElementStyle = {
    margin: "10px 10px 10px 0",
    maxWidth:"800px",
    width: "25%"
  };

  return (
    <div>
      <hr />
      <div className="block--center-horizontally__flex">
        <div style={itemElementStyle}>{name}</div>
        <div style={itemElementStyle}>Status</div>
        <div style={itemElementStyle}>Product</div>
        <div style={itemElementStyle}>Current end date</div>
      </div>
    </div>
  );
};

export default UserListItem;
