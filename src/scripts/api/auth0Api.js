"use strict";
import $ from "jquery";
import { API } from "../constants/apiRoutes";

function buildHeaders() {
  return {
    "Authorization": `Bearer ${localStorage.userToken}`
  };
}

export function login() {
  const url = `${API}/login`;
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
  const url = `${API}/signup`;
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
