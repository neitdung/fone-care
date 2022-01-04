import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const IMEIPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="IMEI"
      />
      <Outlet />
    </div>
  );
};

export default IMEIPage;
