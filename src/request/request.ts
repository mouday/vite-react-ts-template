import axios from "axios";

const instance = axios.create({
  baseURL: "https://httpbin.org",
  timeout: 1000 * 10, // 毫秒
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return err;
  }
);

export default instance;
