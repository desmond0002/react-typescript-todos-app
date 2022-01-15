import axiosOrig from 'axios';

const axios = axiosOrig.create({
  withCredentials: false,
  maxRedirects: 0,
});

axios.defaults.baseURL = 'http://localhost:9000';

export { axios };
