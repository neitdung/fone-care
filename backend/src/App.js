import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
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
import RoleRoute from "./ultis/role-route";
import LoginPage from "./page/login";
import Dashboard from "./page/dashboard";

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return token
    ? {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      }
    : { headers };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
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
                <Link to={`/dashboard`}>Dashboard</Link>
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
                onClick={(e) => logout()}
              >
                Logout
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            className="bg-white"
          >
            <Content className="bg-white mx-4 my-6 p-6 min-h-screen">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/dashboard"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/order/new"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/order/:id"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/order"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/category/new"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/category/:id"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/category"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/product/new"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/product"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/imei/new"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/imei/:imei"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/imei"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/officer/new"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/officer/:id"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/officer"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
                <Route
                  path="/my-account"
                  element={
                    <RoleRoute role={ROLE_OFFICER}>
                      <Dashboard />
                    </RoleRoute>
                  }
                />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
