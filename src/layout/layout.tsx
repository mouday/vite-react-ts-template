import React, { useState, useEffect } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Dropdown } from "antd";
import "./layout.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Link, useRoutes, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import LayoutMenu from "./LayoutMenu";
import { getCurrentPath } from "./config";
import { Avatar, Button } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();
  const currentRoute = useLocation();

  const [items, setItems] = useState([]);

  const dropdownItems = [
    {
      key: "logout",
      label: (
        <a target="_self" href="/login">
          退出
        </a>
      ),
    },
  ];

  const { username } = useSelector((state: any) => {
    return {
      username: state.user.username,
    };
  });

  useEffect(() => {
    const routePath = getCurrentPath(currentRoute.pathname);

    setItems(
      routePath.map((item) => {
        return {
          title: <a href={item.key}>{item.label}</a>,
        };
      })
    );
  }, [currentRoute]);

  return (
    <Layout className="layout__wrap">
      {/* 左边导航栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {collapsed ? (
          <div className="layout__logo">
            <AppstoreOutlined />
          </div>
        ) : (
          <div className="layout__logo">React管理后台</div>
        )}
        <LayoutMenu></LayoutMenu>
      </Sider>

      {/* 右边内容 */}
      <Layout className="layout__main">
        {/* 头部 */}
        <Header className="layout__header">
          {/* 面包屑 */}
          <Breadcrumb items={items} style={{ lineHeight: "64px" }} />

          <Dropdown
            menu={{ items: dropdownItems }}
            placement="bottomRight"
            arrow
          >
            <div className="layout__user">
              <Avatar size={32} icon={<UserOutlined />} />
              <span className="layout__username">{username}</span>
            </div>
          </Dropdown>
        </Header>

        {/* 内容 */}
        <Content className="layout__content">
          <Outlet></Outlet>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
