"use strict";
import ProductList from "./products/ProductList";
import UserList from "./users/UserList";

const Dashboard = () => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title flex--center">
        <div className="mdl-card__title-text">
          <h3>Dashboard</h3>
        </div>
      </div>
      <div className="mdl-card__supporting-text center">
        <div className="mdl-tabs mdl-js-tabs">
          <div className="mdl-tabs__tab-bar">
            <a href="#products-panel" className="mdl-tabs__tab is-active">Products</a>
            <a href="#customers-panel" className="mdl-tabs__tab">Customers</a>
          </div>
          <div className="mdl-tabs__panel is-active" id="products-panel">
            <ProductList />
          </div>
          <div className="mdl-tabs__panel" id="customers-panel">
            <UserList />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard
