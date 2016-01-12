"use strict";
import CustomerListItem from "./CustomerListItem";

const CustomerList = ({
  customers
}) => {
  let items = [];
  for (let key in customers) {
    if (customers.hasOwnProperty(key)) {
      items.push(
        <CustomerListItem key={key} customer={customers[key]}/>
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

export default CustomerList
