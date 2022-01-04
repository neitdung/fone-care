import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const CustomerPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Customer"
      />
      <Outlet />
    </div>
  );
};

export default CustomerPage;
