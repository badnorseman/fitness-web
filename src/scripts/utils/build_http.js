"use strict";

const buildFormData = (entityName, data) => {
  let formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(`${entityName}[${key}]`, data[key]);
    }
  }
  return formData;
};

const buildHeaders = () => {
  const token = localStorage.auth_token;
  return { "Authorization": `Token token=${token}` };
};

const buildUrl = (serverName, entityName, params) => {
  const urlParams = buildUrlParams(params);

  if (entityName === "coach") {
    return `${serverName}/coaches${urlParams}`;
  } else if (entityName === "identity") {
    return `${serverName}/identities${urlParams}`;
  } else {
    return `${serverName}/${entityName}s${urlParams}`;
  }
};

const buildUrlParams = (params) => {
  return (params) ? `/${params}` : "";
};

export {
  buildFormData,
  buildHeaders,
  buildUrl
};
