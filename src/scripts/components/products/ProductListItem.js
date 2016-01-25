"use strict";

const ProductListItem = ({ product, goTo }) => {
  const { currency, name, price } = product;
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
      <a href="#!"
        className="block--center-horizontally__flex"
        onClick={ev => {
          ev.preventDefault();
          goTo("EDITPRODUCT", product);
        }}
      >
        <div style={styles.itemElement}>{name}</div>
        <div style={styles.itemElement}>{currency}</div>
        <div style={styles.itemElement}>{price}</div>
        <div style={styles.itemElement}></div>
      </a>
    </div>
  );
};

export default ProductListItem
