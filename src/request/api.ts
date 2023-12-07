import request from "./request";

const api = {
  // 获取用户信息
  get: (params: any): Promise<IResult<null>> => request.get("/get", params),

  /**
   * 登录
   */
  login: (params: LoginReq): Promise<IResult<loginRes>> =>
    request.post("/login", params),
  /**
   * 获取数据
   */
  getList: (params: any): Promise<IResult<any>> =>
    request.post("/getList", params),

    
};

export default api;
