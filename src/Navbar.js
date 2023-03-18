import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ routes, path }) => {
  return (
    <div className="navBar">
      {routes.map((i) => {
        return <Link to={i.path}>{i.title}</Link>;
      })}
    </div>
  );
};
