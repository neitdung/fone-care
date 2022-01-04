import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const OfficerPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Officer"
      />
      <Outlet />
    </div>
  );
};

export default OfficerPage;
