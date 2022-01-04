import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const CategoryPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Category"
      />
      <Outlet />
    </div>
  );
};

export default CategoryPage;
