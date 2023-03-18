import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";

/*
 * This is the route utility component used for generating
 * routes and child routes it only requires routes array and basePath
 */
function MapAllowedRoutes({ routes, isAddNotFound }) {
  console.log("routes", routes);
  return (
    <React.Fragment>
      <Switch>
        {routes.map((route) => {
          const {
            path,
            component: Component,
            children,
            title,
            permission,
            ...rest
          } = route;
          console.log("route", route);
          return (
            <>
              <Route
                element={Component}
                {...rest}
                key={path}
                path={`${path}`}
              />
            </>
          );
        })}
      </Switch>
    </React.Fragment>
  );
}

export default memo(MapAllowedRoutes);
