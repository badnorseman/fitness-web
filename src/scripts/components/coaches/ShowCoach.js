"use strict";
import { connect } from "react-redux";
import Link from "../Link";
import ProductGridlist from "../products/ProductGridlist";

const ShowCoach = ({ coach, products }) => {
  let productsByCoach = {};
  coach.products.forEach(el => {
    if (products[el.id]) { productsByCoach[el.id] = products[el.id]; }
  })

  const { avatar, email, name } = coach;
  const styles = {
    avatar: {
      borderRadius: "46px",
      marginTop: "46px",
      height: "92px",
      width: "92px"
    },
    image: {
      backgroundImage: "url(" + avatar + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "160px",
      width: "auto",
      WebkitTransition: "all",
      msTransition: "all"
    }
  };

  return (
    <div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title" style={styles.image}>
            <img src={avatar} alt="" style={styles.avatar} />
          </div>
          <div className="mdl-card__supporting-text">
            <h3 className="mdl-card__title-text">{name}</h3>
            <h5 className="mdl-typography--subhead">Title</h5>
            <p>{email}</p>
          </div>
          <div className="mdl-card__actions">
            <Link
              route="MARKETPLACE"
              styles="mdl-button mdl-js-button mdl-js-ripple-effect"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
          <ProductGridlist products={products} />
        </div>
      </div>
    </div>
  );
};

// const ProductList = ({ products }) => {
//   let items = [];
//   for (let key in products) {
//     if (products.hasOwnProperty(key)) {
//       items.push(
//         <ProductListItem key={key} product={products[key]} />
//       );
//     }
//   }
//
//   return (
//     <div className="mdl-grid">
//       {items}
//     </div>
//   );
// };

// const ProductListItem = ({ product }) => {
//   const { currency, description, name, price } = product;
//
//   return (
//     <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--3-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--2dp">
//       <div className="mdl-card__supporting-text">
//         <h3>{name}</h3>
//         <p>{description}</p>
//         <p>{currency}&nbsp;{price}</p>
//       </div>
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

export default connect(mapStateToProps)(ShowCoach)
