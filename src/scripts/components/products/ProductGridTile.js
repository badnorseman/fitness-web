"use strict";

const ProductGridTile = ({
  product,
  goTo
}) => {
  const { description, image, name } = product;

  const styles = {
    image: {
      maxHeight: "160px"
    }
  };

  return (
    <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
      <div className="mdl-card__media">
        <a href="#!"
          onClick={ev => {
            ev.preventDefault();
            goTo("SHOWPRODUCT", product);
          }}
        >
          <img src={image} alt="" style={styles.image} />
        </a>
      </div>
      <div className="mdl-card__title">
        <h5 className="mdl-card__title-text">{name}</h5>
      </div>
      <div className="mdl-card__supporting-text">
        <h6 className="mdl-typography--subhead">{description}</h6>
      </div>
    </div>
  );
};

export default ProductGridTile
