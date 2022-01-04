import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const ReviewPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Review"
      />
      <Outlet />
    </div>
  );
};

export default ReviewPage;
