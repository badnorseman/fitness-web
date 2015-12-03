"use strict";

describe("fetchProducts", () => {
  describe("on success", () => {
    it("should return status 200", () => {
      let fetchProducts = require("./fetch_products");
      let response = fetchProducts(200);
      expect(response).toEqual(200);
    });
    it("should return products", () => {
      let fetchProducts = require("./fetch_products");
      let response = fetchProducts();
      expect(response).toEqual({});
    });
  });
});
