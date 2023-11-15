// 路由写法1
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "../App";
import Home from "../views/Home/Home";
import About from "../views/About/About";

// BrowserRouter history模式
// HashRouter hash模式

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* 配置重定向 */}
          <Route path="/" element={<Navigate to="/home"/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
