"use strict";
import $ from "jquery";

export default function fetchProducts(status, result = {}) {
  return (status === 200) ? status : result
  // return (
  //   $.ajax({
  //     url: "http://localhost:3000/api/products",
  //     dataType: "json",
  //     type: "GET"
  //   })
  // );
}
