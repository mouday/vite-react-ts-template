import React, { useState, useEffect } from "react";
import { MENU_ITEMS } from "./config";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, useMatches } from "react-router-dom";

export default function LayoutMenu() {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();

  const [openKeys, setOpenKeys] = useState([""]);

  console.log(currentRoute.pathname);

  const handleMenuClick = (e) => {
    // console.log(e.key);
    // 编程式路由导航
    navigateTo(e.key);
  };

  useEffect(() => {
    for (let item of MENU_ITEMS) {
      if (item.children) {
        let currentChild = item.children.find((child) => {
          return child.key == currentRoute.pathname;
        });

        if (currentChild) {
          setOpenKeys([item.key]);
        }
      }
    }
  });

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      defaultOpenKeys={openKeys}
      items={MENU_ITEMS}
      onClick={handleMenuClick}
    />
  );
}
