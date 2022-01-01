import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Drawer, Layout, Button } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Layout.Header>
          <Header />
        </Layout.Header> */}
        <Layout.Content>
          {/* <Routes>
             <Route path="customer" element={<Dashboard />}>
              <Route path="wishlist" element={<Dashboard />} />
              <Route path="address" element={<Dashboard />} />
              <Route path="info" element={<Dashboard />} />
              <Route path="review" element={<Dashboard />} />
              <Route path="order" element={<Dashboard />} />
            </Route>
            <Route path="signin" element={<Dashboard />} />
            <Route path="signup" element={<Dashboard />} />
            <Route path="category/:slug" element={<Dashboard />} />
            <Route path="product/:slug" element={<Dashboard />} />
            <Route path="search" element={<Dashboard />} />
            <Route path="cart" element={<Dashboard />} />
            <Route path="checkout" element={<Dashboard />}>
              <Route path="success" element={<Dashboard />} />
            </Route>

          </Routes> */}
            <div>Content</div>
        </Layout.Content>
        <Layout.Footer>
          <div>footer</div>
        </Layout.Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
