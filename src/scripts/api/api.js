"use strict";
import $ from "jquery";
import { buildFormData, buildHeaders, buildUrl } from "../utils/api_utils";
import { SERVER, LOGIN, LOGOUT, OAUTH, SIGNUP } from "../constants/api_routes";

export function create(entityName, data) {
  const url = buildUrl(SERVER, entityName);
  const headers = buildHeaders();
  const formData = buildFormData(entityName, data);
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      headers: headers,
      processData: false,
      contentType: false,
      data: formData
    })
  );
}

export function destroy(entityName, id) {
  const url = buildUrl(SERVER, entityName, id);
  const headers = buildHeaders();
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "DELETE",
      headers: headers
    })
  );
}

export function fetchClientToken(entityName) {
  const url = buildUrl(SERVER, entityName, "new");
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

export function fetchAll(entityName) {
  const url = buildUrl(SERVER, entityName);
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

export function fetchById(entityName, id) {
  const url = buildUrl(SERVER, entityName, id);
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

export function login(data) {
  const url = `${SERVER}${LOGIN}`;
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      data: data
    })
  );
}

export function logout() {
  const url = `${SERVER}${LOGOUT}`;
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET"
    })
  );
}

export function oauth(provider) {
  const url = `${SERVER}${OAUTH}/${provider}/callback`;
  return Promise.resolve(
    $.ajax({
      url: url,
      xhrFields: { withCredentials: true },
      dataType: "json",
      type: "GET"
    })
  );
}

export function signup(data) {
  const url = `${SERVER}${SIGNUP}`;
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      data: data
    })
  );
}

export function update(entityName, data) {
  const url = buildUrl(SERVER, entityName, data.id);
  const headers = buildHeaders();
  const formData = buildFormData(entityName, data);
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "PATCH",
      headers: headers,
      processData: false,
      contentType: false,
      data: formData
    })
  );
}
