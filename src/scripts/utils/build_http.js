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
  const token = localStorage.userToken;
  return { "Authorization": `Token token=${token}` };
};

const buildUrl = (serverName, entityName, params) => {
  const urlParams = buildUrlParams(params);

  let pluralized = "";
  if (entityName === "coach") { pluralized = "coaches"; }
  else if (entityName === "identity") { pluralized = "identities"; }
  else { pluralized = `${entityName.toLowerCase()}s`; }

  return `${serverName}/${pluralized}${urlParams}`;
};

const buildUrlParams = (params) => {
  return (params) ? `/${params}` : "";
};

export { buildFormData };
export { buildHeaders };
export { buildUrl };
