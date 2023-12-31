import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
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
    
    // 增加ok参数
    if (res.data.code == 0) {
      res.data.ok = true;
    } else {
      res.data.ok = false;
    }

    return res.data;
  },
  (err) => {
    return err;
  }
);

export default instance;
