import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const OrderPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Order"
      />
      <Outlet />
    </div>
  );
};

export default OrderPage;
