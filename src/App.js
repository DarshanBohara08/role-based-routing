import { Redirect, useRouteMatch } from "react-router";
import "./App.css";
import { PrivateRouteConfig } from "./config/PrivateRouteConfig";
import { Navbar } from "./Navbar";
import MapAllowedRoutes from "./routeConfig/MapAllowedRoutes";
import { FilterRoute } from "./utils/filterRoute";

/**
 *
 * @returns JSX Element
 */
function App() {
  const isLoggedIn = true;
  const url = useRouteMatch("/");
  let allowedRoutes = [];
  if (isLoggedIn) {
    allowedRoutes = FilterRoute(PrivateRouteConfig);
  } else {
    return <Redirect to="/" />;
  }
  console.log("allowedRoutes", allowedRoutes);
  return (
    <>
      <Navbar routes={allowedRoutes} path={url} />
      <MapAllowedRoutes routes={allowedRoutes} basePath="/" isAddNotFound />
    </>
  );
}

export default App;
