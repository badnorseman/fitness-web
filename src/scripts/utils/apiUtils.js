"use strict";
import { API } from "../constants/apiRoutes";

export function getFormData(entityName, data) {
  let formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(`${entityName.toLowerCase()}[${key}]`, data[key]);
    }
  }
  return formData;
}

export function getHeaders() {
  return {
    "Authorization": `Bearer ${localStorage.userToken}`
    // "Authorization": `Token token=${localStorage.userToken}`
  };
}

export function getUrl(entityName, params) {
  return `${API}/${entityName.toLowerCase()}s${getUrlParams(params)}`;
}

function getUrlParams(params = "") {
  return (params === "") ? "" : `/${params}`;
}
