import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  ContactsOutlined,
  UserOutlined,
  BarcodeOutlined,
  SolutionOutlined,
  DollarCircleOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import { ROLE_MANAGER, ROLE_OFFICER, ROLE_SUPPLIER } from "./ultis/roles";
import { getToken, getRole, logout } from "./ultis/auth";
import { grantPermission } from "./ultis/permission";

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [role, setRole] = useState(ROLE_SUPPLIER);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    } else {
      setRole(getRole());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
        <div
          style={{
            minHeight: "32px",
            margin: 16,
            backgroundColor: "darkslategray",
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}>
          {grantPermission(ROLE_OFFICER, role) ? (
            <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
              <Link to={`/`}>Dashboard</Link>
            </Menu.Item>
          ) : null}
          {grantPermission(ROLE_OFFICER, role) ? (
            <SubMenu key="sales" icon={<DollarCircleOutlined />} title="Sales">
              <Menu.Item key="order">
                <Link to={`/order`}>Orders</Link>
              </Menu.Item>
              <Menu.Item key="review">
                <Link to={`/review`}>Reviews</Link>
              </Menu.Item>
            </SubMenu>
          ) : null}
          {grantPermission(ROLE_OFFICER, role) ? (
            <SubMenu key="catalog" icon={<ProfileOutlined />} title="Catalog">
              <Menu.Item key="product">
                <Link to={`/product`}>Product</Link>
              </Menu.Item>
              <Menu.Item key="category">
                <Link to={`/category`}>Category</Link>
              </Menu.Item>
            </SubMenu>
          ) : null}
          {grantPermission(ROLE_OFFICER, role) ? (
            <Menu.Item key="customer" icon={<UserOutlined />}>
              <Link to={`/customer`}>Customer</Link>
            </Menu.Item>
          ) : null}
          {grantPermission(ROLE_MANAGER, role) ? (
            <Menu.Item key="officer" icon={<SolutionOutlined />}>
              <Link to={`/officer`}>Officer</Link>
            </Menu.Item>
          ) : null}
          <Menu.Item key="imei" icon={<BarcodeOutlined />}>
            <Link to={`/imei`}>IMEI Tracking</Link>
          </Menu.Item>
          <Menu.Item key="my-account" icon={<ContactsOutlined />}>
            <Link to={`/my-account`}>My Account</Link>
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<LeftCircleOutlined />}
            onClick={(e) => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
