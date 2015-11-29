"use strict";
import $ from "jquery";
import { AUTH0LOGIN, AUTH0SIGNUP } from "../constants/apiRoutes";

function getHeaders() {
  return {
    "Authorization": `Bearer ${localStorage.userToken}`
  };
}

export function login() {
  const url = AUTH0LOGIN;
  const headers = getHeaders();
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
  const url = AUTH0SIGNUP;
  const headers = getHeaders();
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
