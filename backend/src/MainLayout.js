import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    LineChartOutlined,
    SolutionOutlined,
    DollarCircleOutlined,
    AppstoreOutlined,
    ProfileOutlined,
    LeftCircleOutlined,
  } from "@ant-design/icons";
import { logout } from "./ultis/auth";
import { ROLE_MANAGER, ROLE_COMMON, ROLE_OFFICER } from "./ultis/roles";
import { getToken } from "./ultis/auth";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  let navigate = useNavigate();
  useEffect(()=> {
    if (!getToken()) {
      navigate("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout style={ {minHeight: '100vh' } }>
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggle}
      className="overflow-auto min-h-screen fixed left-0"
    >
      <div style={ {minHeight: '32px' , margin: 16, backgroundColor: 'darkslategray'} }/>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
      >
        <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
          <Link to={`/`}>Dashboard</Link>
        </Menu.Item>
        <SubMenu
          key="sales"
          icon={<DollarCircleOutlined />}
          title="Sales"
        >
          <Menu.Item key="order">
            <Link to={`/order`}>Orders</Link>
          </Menu.Item>
          <Menu.Item key="review">
            <Link to={`/review`}>Reviews</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="catalog" icon={<ProfileOutlined />} title="Catalog">
          <Menu.Item key="product">
            <Link to={`/product`}>Product</Link>
          </Menu.Item>
          <Menu.Item key="category">
            <Link to={`/category`}>Category</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="customer" icon={<UserOutlined />}>
          <Link to={`/customer`}>Customer</Link>
        </Menu.Item>
        <Menu.Item key="officer" icon={<SolutionOutlined />}>
          <Link to={`/officer`}>Officer</Link>
        </Menu.Item>
        <Menu.Item key="my-account" icon={<SolutionOutlined />}>
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
    <Layout
      className="bg-white"
    >
      <Content className="bg-white mx-4 my-6 p-6 min-h-screen">
        <Outlet />
      </Content>
        </Layout>
    </Layout>
  );
};

export default MainLayout;
