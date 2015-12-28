"use strict";
import $ from "jquery";
import {
  SERVER
} from "../constants/server";
import {
  buildFormData,
  buildHeaders,
  buildUrl
} from "../utils/build_http";

const create = (entityName, data) => {
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
};

const destroy = (entityName, id) => {
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
};

const fetchClientToken = (entityName) => {
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
};

const fetchAll = (entityName) => {
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
};

const fetchById = (entityName, id) => {
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
};

const login = (data) => {
  const url = `${SERVER}/auth/identity/callback`;
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      data: data
    })
  );
};

const logout = () => {
  const url = `${SERVER}/logout`;
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET"
    })
  );
};

const oauth = (provider) => {
  const url = `${SERVER}/auth/${provider}/callback`;
  return Promise.resolve(
    $.ajax({
      url: url,
      xhrFields: { withCredentials: true },
      dataType: "json",
      type: "GET"
    })
  );
};

const signup = (data) => {
  const url = `${SERVER}/auth/identity/register`;
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      data: data
    })
  );
};

const update = (entityName, data) => {
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
};

export {
  create,
  destroy,
  fetchAll,
  fetchById,
  fetchClientToken,
  login,
  logout,
  oauth,
  signup,
  update
};
