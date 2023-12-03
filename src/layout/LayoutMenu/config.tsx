import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

export const MENU_ITEMS = [
  {
    label: "Home",
    key: "/home",
    icon: <PieChartOutlined />,
  },
  {
    label: "关于",
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
  {
    label: "数据",
    key: "/data",
    icon: <DesktopOutlined />,
    children: [
      {
        label: "Log",
        key: "/log",
      },
      {
        label: "User",
        key: "/user",
      },
    ],
  },
];
