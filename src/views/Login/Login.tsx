import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useLocation, useMatches } from "react-router-dom";
import "./Login.less";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/user-reducer";


export default function Login() {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    // {username: 'admin', password: '123456'}
    dispatch(setUser({ username: values.username }));
    navigateTo("/");
  };
  // api
  return (
    <div className="login-wrap">
      <div className="login">
        <div className="login__title">登录</div>

        <Form
          className="login__form"
          name="basic"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="用户名" size="large" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              placeholder="密码"
              size="large"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button type="primary" htmlType="submit" block size="large">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
