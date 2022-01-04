import React from "react";
import { PageHeader } from "antd";

import { Outlet } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Product"
      />
      <Outlet />
    </div>
  );
};

export default ProductPage;
