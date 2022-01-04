import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ManagerRoute from "./route/manager";
import OfficerRoute from "./route/officer";
import LoginPage from "./page/login";
import Dashboard from "./page/dashboard";
import CustomerPage from "./page/customer";
import ReviewPage from "./page/review";
import CategoryPage from "./page/category";
import IMEIPage from "./page/imei";
import MyAccount from "./page/my-account";
import OfficerPage from "./page/officer";
import OrderPage from "./page/order";
import ProductPage from "./page/product";

import CategoryList from "./component/category/list";

import MainLayout from "./MainLayout";
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
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<MainLayout />}> 
            <Route path="officer" element={<ManagerRoute />}>
              <Route path="new" element={<Dashboard />} />
              <Route path=":id" element={<Dashboard />} />
              <Route index element={<OfficerPage />} />
            </Route>
            <Route path="imei" element={<IMEIPage />}>
              <Route path="new" element={<Dashboard />} />
              <Route path=":id" element={<Dashboard />} />
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="/my-account" element={<MyAccount />} />
            <Route element={<OfficerRoute />}>
              <Route index element={<Dashboard />} />
              <Route path="order" element={<OrderPage />}>
                <Route path="new" element={<Dashboard />} />
                <Route path=":id" element={<Dashboard />} />
                <Route index element={<Dashboard />} />
              </Route>
              <Route path="category" element={<CategoryPage />}>
                <Route path="new" element={<Dashboard />} />
                <Route path=":id" element={<Dashboard />} />
                <Route index element={<CategoryList />} />
              </Route>
              <Route path="product" element={<ProductPage />}>
                <Route path="new" element={<Dashboard />} />
                <Route path=":id" element={<Dashboard />} />
                <Route index element={<Dashboard />} />
              </Route>
              <Route path="customer" element={<CustomerPage />}>
                <Route path="new" element={<Dashboard />} />
                <Route path=":id" element={<Dashboard />} />
                <Route index element={<Dashboard />} />
              </Route>
              <Route path="review" element={<ReviewPage />}>
                <Route path="new" element={<Dashboard />} />
                <Route path=":id" element={<Dashboard />} />
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
