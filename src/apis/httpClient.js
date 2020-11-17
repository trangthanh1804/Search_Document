import axios from "axios";
import { getTokenFromLocalStorage } from "utils/handleLocalStorage";
export const httpClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
httpClient.interceptors.request.use(
  function (config) {
    const token = getTokenFromLocalStorage();
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  function ({ data }) {
    return data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
