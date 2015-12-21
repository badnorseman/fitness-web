"use strict";

const ProductListItem = ({
  product,
  onEdit
}) => {
  const { currency, name, price } = product;

  const itemElementStyle = {
    margin: "10px 10px 10px 0",
    maxWidth:"800px",
    width: "25%"
  };

  return (
    <div>
      <hr />
      <a href="#!" className="block--center-horizontally__flex"
        onClick={ev => {
          ev.preventDefault();
          onEdit(product);
        }}
      >
        <div style={itemElementStyle}>{name}</div>
        <div style={itemElementStyle}>{currency}</div>
        <div style={itemElementStyle}>{price}</div>
        <div style={itemElementStyle}></div>
      </a>
    </div>
  );
};

export default ProductListItem
