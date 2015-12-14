"use strict";
import $ from "jquery";
import { SERVER } from "../constants/api_routes";

function buildHeaders() {
  const token = localStorage.userToken;
  return {
    "Authorization": `Bearer ${token}`
  };
}

export function login() {
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
}

export function signup(data) {
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
}
