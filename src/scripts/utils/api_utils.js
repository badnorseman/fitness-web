"use strict";

const buildFormData = (entityName, data) => {
  let formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(`${entityName.toLowerCase()}[${key}]`, data[key]);
    }
  }
  return formData;
};

const buildHeaders = () => {
  return {
    "Authorization": `Token token=${localStorage.userToken}`
  };
};

const buildUrl = (serverName, entityName, params) => {
  return `${serverName}/${entityName.toLowerCase()}s${buildParams(params)}`;
};

const buildParams = (params = "") => {
  return (params === "") ? "" : `/${params}`;
};

export { buildFormData };
export { buildHeaders };
export { buildUrl };
