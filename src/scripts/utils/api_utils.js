"use strict";

export function buildFormData(entityName, data) {
  let formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(`${entityName.toLowerCase()}[${key}]`, data[key]);
    }
  }
  return formData;
}

export function buildHeaders() {
  return {
    "Authorization": `Token token=${localStorage.userToken}`
  };
}

export function buildUrl(serverName, entityName, params) {
  return `${serverName}/${entityName.toLowerCase()}s${buildParams(params)}`;
}

function buildParams(params = "") {
  return (params === "") ? "" : `/${params}`;
}
