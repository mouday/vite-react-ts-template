import request from "./request";

const api = {
  // 获取用户信息
  get: (params: any) => request.get("/get", params),
  post: (params: any) => request.post("/post", params),
};

export default api;
