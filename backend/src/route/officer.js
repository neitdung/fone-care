import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getRole } from "../ultis/auth";
import { grantPermission } from "../ultis/permission";
import { ROLE_SUPPLIER, ROLE_OFFICER } from "../ultis/roles";

export default function OfficerRoute() {
  let currentRole = getRole();

  if (grantPermission(ROLE_OFFICER, currentRole)) {
    return <Outlet />;
  }
return currentRole === ROLE_SUPPLIER ? <Navigate to="/imei" /> : <Navigate to="/" />;
}
