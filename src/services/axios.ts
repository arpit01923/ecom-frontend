import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.API_URL || "http://localhost:4000",
});

// Add a request interceptor
Axios.interceptors.request.use(
  function (config: any) {
    // config.headers = {
    //   Authorization: `Bearer ${accessToken}`,
    // };
    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default Axios;
