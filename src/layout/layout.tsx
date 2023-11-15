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

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    label: "Home",
    key: "/home",
    icon: <PieChartOutlined />,
  },
  {
    label: "About",
    key: "/about",
    icon: <DesktopOutlined />,
    children: [
      {
        label: "Table",
        key: "/table",
      },
      {
        label: "Form",
        key: "/form",
      },
    ],
  },

  // getItem("Option 1", "1", <PieChartOutlined />),
  // getItem("Option 2", "2", <DesktopOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  // getItem("Files", "9", <FileOutlined />),
];

const AppLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigateTo = useNavigate();

  const handleMenuClick = (e) => {
    // console.log(e.key);
    // 编程式路由导航
    navigateTo(e.key);
  };

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

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
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
        <Content className="layout__content">{children}</Content>

        {/* 底部 */}
        <Footer className="layout__footer">
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
