"use strict";
import ProductListItem from "./ProductListItem";

const ProductList = ({
  products,
  onEdit,
  onNew
}) => {
  let items = (products) => {
    let items = [];
    for (let key in products) {
      if (products.hasOwnProperty(key)) {
        items.push(
          <ProductListItem key={key} product={products[key]} onEdit={onEdit} />
        );
      }
    }
    return items;
  }(products);

  const buttonStyle = {
    float: "right",
    margin: "50px 0 0 0"
  };

  const headerElementStyle = {
    margin: "0 10px 10px 0",
    maxWidth: "800px",
    width: "25%"
  };

  const listStyle = {
    padding: "50px 0 0 0"
  };

  return (
    <div className="block--center-horizontally__margin" style={listStyle}>
      <div className="block--center-horizontally__flex">
        <div style={headerElementStyle}>NAME</div>
        <div style={headerElementStyle}>CURRENCY</div>
        <div style={headerElementStyle}>PRICE</div>
        <div style={headerElementStyle}>NUMBERS OF USERS</div>
      </div>
      {items}
      <button
        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
        style={buttonStyle}
        onClick={onNew}>
        <i className="material-icons">add</i>
      </button>
    </div>
  );
};

export default ProductList
