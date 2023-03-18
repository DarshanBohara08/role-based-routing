import { Agent } from "../pages/agent";
import { Dashboard } from "../pages/dashboard";
import { Game } from "../pages/game";
import { Role } from "./Roles";
/**
 * Define routes
 */
export const PrivateRouteConfig = [
  {
    component: <Dashboard />,
    path: "/",
    title: "Dashboard",
    exact: true,
    permission: [Role.SUPER_ADMIN, Role.ADMIN],
  },
  {
    component: <Agent />,
    path: "/agent",
    title: "Agent",
    permission: [Role.SUPER_ADMIN, Role.ADMIN],
  },
  {
    component: <Game />,
    path: "/game",
    title: "Game",
    permission: [Role.SUPER_ADMIN, Role.ADMIN, Role.USER],
  },
];
