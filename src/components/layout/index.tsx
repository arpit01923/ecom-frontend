import classNames from "classnames";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      <div
        className={classNames(
          "min-h-mainLayout",
          pathname === "/" ? "" : "p-4 container mx-auto"
        )}
      >
        {children}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
