"use strict";
import $ from "jquery";
import { getFormData, getHeaders, getUrl } from "../utils/apiUtils";
import { LOGIN, SIGNUP } from "../constants/apiRoutes";

export function create(entityName, data) {
  const url = getUrl(entityName);
  const headers = getHeaders();
  const formData = getFormData(entityName, data);
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
  const url = getUrl(entityName, id);
  const headers = getHeaders();
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
  const url = getUrl(entityName, "new");
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

export function fetchAll(entityName) {
  const url = getUrl(entityName);
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

export function fetchById(entityName, id) {
  const url = getUrl(entityName, id);
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

export function login() {
  const url = LOGIN;
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

// Later we will customize signup to include name, birthday
export function signup(data) {
  const url = SIGNUP;
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

export function update(entityName, data) {
  const url = getUrl(entityName, data.id);
  const headers = getHeaders();
  const formData = getFormData(entityName, data);
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
