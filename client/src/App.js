import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Drawer, Layout, Button } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Layout.Header>
          
        </Layout.Header>
        <Layout.Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout.Content>
        <Layout.Footer>

        </Layout.Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
