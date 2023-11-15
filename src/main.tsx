import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import { BrowserRouter } from "react-router-dom";
// 引入路由对象
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
