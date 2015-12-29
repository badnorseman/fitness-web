"use strict";

const ProductGridTile = ({
  product,
  onShow
}) => {
  const { currency, image, name, price } = product;

  const cellStyle = {
    margin: "0"
  };

  const cardStyle = {
    height: "auto",
    margin: "0 auto",
    marginBottom: "10px",
    marginRight: "10px",
    maxWidth: "320px",
    width: "320px"
  };

  const imageStyle = {
    backgroundImage: "url(" + image + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "160px",
    WebkitTransition: "all",
    msTransition: "all"
  };

  return (
    <a href="#!"
      onClick={ev => {
        ev.preventDefault();
        onShow(product);
      }}
    >
      <div className="mdl-cell mdl-cell--6-col-phone mdl-cell--4-col-tablet mdl-cell--3-col-desktop"
        style={cellStyle}
       >
        <div className="mdl-card mdl-shadow--2dp" style={cardStyle}>
          <div className="mdl-card__title" style={imageStyle}></div>
          <div className="mdl-card__supporting-text">
            <h5>{name}</h5>
            <h6>{currency} {price}</h6>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductGridTile
