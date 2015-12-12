"use strict";

const ProductListItem = ({
  product,
  onEdit
}) => {
  const { currency, name, price } = product;
  const columnStyle = {
    margin: "10px 10px 10px 0",
    maxWidth:"800px",
    width: "25%"
  };

  return (
    <div>
      <hr />
      <a href="#!" className="block--center-horizontally__flex"
        onClick={e => {
          e.preventDefault();
          onEdit(product);
        }}
      >
        <div style={columnStyle}>{name}</div>
        <div style={columnStyle}>{currency}</div>
        <div style={columnStyle}>{price}</div>
        <div style={columnStyle}></div>
      </a>
    </div>
  );
};

export default ProductListItem;
