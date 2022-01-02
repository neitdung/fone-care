import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { getToken, getRole } from "./auth";
import { grantPermission } from "./permission";
import { message } from 'antd';

export default function RoleRoute({ role }) {
    // let token = getToken();
    // let currentRole = getRole();
    let token = false;
    if (!token) {
        return <Navigate to="/login" />;
    } 
    return <Outlet />;
    // if (grantPermission(role, currentRole)) {
    //     return <Outlet />
    // } else {
    //     message.warning("You don't have permission to go this page");
    //     return <Navigate to="/login" />;
    // }
  }