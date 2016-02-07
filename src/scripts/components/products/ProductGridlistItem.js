"use strict";
import Link from "../Link";

const ProductGridlistItem = ({ product }) => {
  const { description, image, name } = product;
  const styles = { image: { maxHeight: "160px" } };

  return (
    <div className="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
      <div className="mdl-card__media">
        <Link route="SHOWPRODUCT" param={product} >
          <img src={image} alt="" style={styles.image} />
        </Link>
      </div>
      <div className="mdl-card__supporting-text">
        <p className="mdl-typography--title">{name}</p>
        <p className="mdl-typography--subhead">{description}</p>
      </div>
    </div>
  );
};

export default ProductGridlistItem
