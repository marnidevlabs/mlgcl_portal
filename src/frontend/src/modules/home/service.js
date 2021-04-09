const domain = process.env.REACT_APP_API_DOMAIN;

export const login = (params) => {
  const formParams = {
    ...params,
    // client_id: process.env.REACT_APP_CLIENT_ID,
    // client_secret: process.env.REACT_APP_CLIENT_SECRET,
    // grant_type: "password",
  };

  return fetch(`${domain}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formParams),
  });
};
