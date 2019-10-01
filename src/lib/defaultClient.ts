import axios from 'axios';

const baseURL = (() => {
  console.log("process.env.NODE_ENV === " + process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001/'
  } else if (process.env.NODE_ENV === 'production') {
    return '/'
  } else {
    return '/'
  }
})();

let progress = 0;
let timerId: any = null;

function setProgress(value: number) {
  progress = value;
  window.progressbar.onChange(progress);
}

function timer() {
  if (progress < 98) {
    const diff = 100 - progress;
    const inc = diff / (10 + progress * (1 + progress / 100));
    setProgress(progress + inc);
  }
  timerId = setTimeout(timer, 50);
}

const defaultClient = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
  
})

defaultClient.defaults.timeout = 3000;

defaultClient.interceptors.request.use(function (config) {
  setProgress(25);
  timer();
  return config
}, function (error) {
  return Promise.reject(error);
});

defaultClient.interceptors.response.use(function (response) {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
  setProgress(100);
  return response;
}, function (error) {
  setProgress(100);
  return Promise.reject(error);
});

export default defaultClient;