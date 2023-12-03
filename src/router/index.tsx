// 路由写法二
import React from "react";
import { Navigate } from "react-router-dom";
import AppLayout from "../layout/layout";
import Login from "../views/Login/Login";

// import Home from "../views/Home/Home";
// import About from "../views/About/About";

const Home = React.lazy(() => import("../views/Home/Home"));
const About = React.lazy(() => import("../views/About/About"));
const Table = React.lazy(() => import("../views/Table/Table"));
const Form = React.lazy(() => import("../views/Form/Form"));
const Log = React.lazy(() => import("../views/Log/Log"));
const User = React.lazy(() => import("../views/User/User"));

const withLoadingComponent = (component) => (
  <React.Suspense fallback={<div>Loading...</div>}>{component}</React.Suspense>
);

export const routes = [
  {
    path: "/",
    // 重定向
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/home",
        element: withLoadingComponent(<Home />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
      },
      {
        path: "/table",
        element: withLoadingComponent(<Table />),
      },
      {
        path: "/form",
        element: withLoadingComponent(<Form />),
      },
      {
        path: "/log",
        element: withLoadingComponent(<Log />),
      },
      {
        path: "/user",
        element: withLoadingComponent(<User />),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    // 重定向
    element: <Navigate to="/home" />,
  },
];
