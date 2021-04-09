import axios from "axios";

const Http = axios.create();

Http.defaults.baseURL = process.env.REACT_APP_API_DOMAIN;
Http.defaults.headers["Accept"] = "application/json";
Http.defaults.headers["Content-Type"] = "application/json";
// Http.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
//   "accessToken"
// )}`;

Http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 401:
        localStorage.removeItem("token");
        window.location.href = "/";

        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default Http;
