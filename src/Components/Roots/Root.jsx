import React from "react";

import { Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Root = () => {
  return (
    <div>
      <MainLayout />
      <Outlet />
    </div>
  );
};

export default Root;
