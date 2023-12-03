import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./layout.css";
import { useNavigate } from "react-router-dom";
import { Link, useRoutes, Outlet } from "react-router-dom";

import LayoutMenu from "./LayoutMenu/LayoutMenu";

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();
 
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
      <Layout>
        {/* 头部 */}
        <Header className="layout__header">
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        {/* 内容 */}
        <Content className="layout__content">
          <Outlet></Outlet>
        </Content>

        {/* 底部 */}
        <Footer className="layout__footer">
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
