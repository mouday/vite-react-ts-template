import { Link, useRoutes } from "react-router-dom";
import { routes } from "./router/index";
import AppLayout from "./layout/layout";

function App() {
  const route = useRoutes(routes);
  
  return <>{route}</>;
}

export default App;
