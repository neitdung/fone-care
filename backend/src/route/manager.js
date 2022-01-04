import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getRole } from "../ultis/auth";
import { grantPermission } from "../ultis/permission";
import { ROLE_SUPPLIER, ROLE_MANAGER } from "../ultis/roles";

export default function ManagerRoute({ role }) {
  let currentRole = getRole();

  if (grantPermission(ROLE_MANAGER, currentRole)) {
    return <Outlet />;
  }
return currentRole === ROLE_SUPPLIER ? <Navigate to="/imei" /> : <Navigate to="/" />;
}
