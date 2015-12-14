"use strict";
import $ from "jquery";
import {
  buildFormData,
  buildHeaders,
  buildUrl
} from "../utils/api_utils";
import {
  SERVER,
  LOGIN,
  LOGOUT,
  OAUTH,
  SIGNUP
} from "../constants/api_routes";

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
  const url = `${SERVER}${LOGIN}`;
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
  const url = `${SERVER}${LOGOUT}`;
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET"
    })
  );
};

const oauth = (provider) => {
  const url = `${SERVER}${OAUTH}/${provider}/callback`;
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
  const url = `${SERVER}${SIGNUP}`;
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

export { create };
export { destroy };
export { fetchAll };
export { fetchById };
export { fetchClientToken };
export { login };
export { logout };
export { oauth };
export { signup };
export { update };
