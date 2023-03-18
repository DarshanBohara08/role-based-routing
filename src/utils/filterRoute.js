import { intersection } from "lodash";

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length;
}

/**
 * Filter routes according to role
 * @param routes -IRoutes
 */
export function FilterRoute(routes) {
  console.log("Routes", routes);
  // const roles = JSON.parse(localStorage.getItem("roles"));
  const roles = ["USER"];
  return routes.filter(({ permission }) => {
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
}
