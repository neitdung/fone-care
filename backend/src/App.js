import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROLE_MANAGER, ROLE_COMMON, ROLE_OFFICER } from "./ultis/roles";
import MainLayout from "./MainLayout";
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
const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
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
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/"
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
                <RoleRoute role={ROLE_COMMON}>
                  <Dashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/imei/:imei"
              element={
                <RoleRoute role={ROLE_COMMON}>
                  <Dashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/imei"
              element={
                <RoleRoute role={ROLE_COMMON}>
                  <Dashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/officer/new"
              element={
                <RoleRoute role={ROLE_MANAGER}>
                  <Dashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/officer/:id"
              element={
                <RoleRoute role={ROLE_MANAGER}>
                  <Dashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/officer"
              element={
                <RoleRoute role={ROLE_MANAGER}>
                  <Dashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/my-account"
              element={
                <RoleRoute role={ROLE_COMMON}>
                  <Dashboard />
                </RoleRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
