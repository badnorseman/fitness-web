"use strict";
import $ from "jquery";
import { SERVER } from "../constants/api_routes";

const buildHeaders = () => {
  const token = localStorage.userToken;
  return {
    "Authorization": `Bearer ${token}`
  };
};

const login = () => {
  const url = `${SERVER}/login`;
  const headers = buildHeaders();
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      headers: headers
    })
  );
};

const signup = (data) => {
  const url = `${SERVER}/signup`;
  const headers = buildHeaders();
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      headers: headers,
      data: data
    })
  );
};

export {
  login,
  signup
};
