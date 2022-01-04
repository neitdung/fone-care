import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const MyAccount = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="My Account"
      />
      <Outlet />
    </div>
  );
};

export default MyAccount;
