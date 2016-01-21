"use strict";

const buildFormData = (entity, data) => {
  let formData = new FormData();
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(`${entity}[${key}]`, data[key]);
    }
  }
  return formData;
};

const buildHeaders = () => {
  const token = localStorage.f_token;
  return { "Authorization": `Token token=${token}` };
};

const buildUrl = (server, entity, params) => {
  const urlParams = buildUrlParams(params);

  if (entity === "coach") {
    return `${server}/coaches${urlParams}`;
  } else if (entity === "identity") {
    return `${server}/identities${urlParams}`;
  } else {
    return `${server}/${entity}s${urlParams}`;
  }
};

const buildUrlParams = (params) => {
  return (params) ? `/${params}` : "";
};

export { buildFormData, buildHeaders, buildUrl };
