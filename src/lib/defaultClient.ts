import axios from 'axios';

const baseUrl = (() => {
  console.log("process.env.NODE_ENV===" + process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001/'
  } else if (process.env.NODE_ENV === 'production') {
    return '/'
  } else {
    return '/'
  }
})();

const defaultClient = axios.create({
  baseURL: baseUrl,
  // setting headers enable
})

defaultClient.defaults.timeout = 3000;

defaultClient.interceptors.request.use(function (config) {
  console.log("interceptor request");
  return config
}, function (error) {
  return Promise.reject(error);
});

defaultClient.interceptors.response.use(function (response) {
  console.log("interceptor response");

  return response;
}, function (error) {
  return Promise.reject(error);
});

export default defaultClient;