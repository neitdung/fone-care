import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  ShoppingOutlined,
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import './style.scss';

const list = [
  { name: "Apple", slug: "apple", children: [] },
  { name: "Samsung", slug: "samsung", children: [] },
  { name: "Xiaomi", slug: "xiaomi", children: [] },
  { name: "Huawei", slug: "huawei", children: [] },
];

const HeaderComponent = ({
  isLogin,
  toggleCart,
  toggleSearch,
  toggleWishlist,
  logoutCustomer,
}) => {
  let navigate = useNavigate();
  useState([])
  const [currentCate, setCurrentCate] = useState("");
  const handleClick = (e) => {
    setCurrentCate(e.key);
  };
  const handleCustomerClick = (e) => {
    switch (e.key) {
      case "login":
        navigate("/customer/login");
        break;
      case "signup":
        navigate("/customer/signup");
        break;
      case "account":
        navigate("/customer/account");
        break;
      case "logout":
        logoutCustomer();
        break;
      default:
        console.log("key fail");
    }
  };
  const handleRightClick = (e) => {
    if (e.key === "search") toggleSearch();
    if (e.key === "cart") toggleCart();
    if (e.key === "wishlist") toggleWishlist();
  };

  const linkMainCate = ({ key, domEvent }) => {
    navigate(`/${key}`);
  };

  return (
    <header className="header">
      <div className="top-link header-link hidden-sm hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12 header-static">
              <i className="fa fa-globe" /> Chào mừng bạn đến với Fone-care
            </div>
            <div className="col-md-6 col-xs-12 right">
              <div className="top-link-dropdown">
                <ul className="header-links">
                  <li className="customer welcome customer-welcome">
                    <span className="customer">
                      <a className="account">Tài khoản</a>
                    </span>
                    <div className="customer-menu">
                      <ul className="header links">
                        <li><Link to="/login">Đăng nhập</Link></li>
                        <li><Link to="/signup">Đăng ký</Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <div className="row">
            <div className="col-md-7 hidden-sm hidden-xs">
              <div className="our-service">
                <div className="row">
                  <div className="box col-md-4">
                    <div className="box-inner">
                      <i className="fa fa-globe" />
                      <div className="content">
                        <h5>Giao hàng 24h</h5>
                        <p>Với mọi đơn hàng tại Hà Nội</p>
                      </div>
                    </div>
                  </div>
                  <div className="box col-md-4">
                    <div className="box-inner">
                      <i className="fa fa-check" />
                      <div className="content">
                        <h5>Chất lượng</h5>
                        <p>Bảo đảm chất lượng</p>
                      </div>
                    </div>
                  </div>
                  <div className="box col-md-4">
                    <div className="box-inner">
                      <i className="fa fa-bell" />
                      <div className="content">
                        <h5>Nguồn gốc</h5>
                        <p>Nhập khẩu chính hãng</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 hidden-sm hidden-xs">
              <div className="minicart-wrapper">
                <Link className="showcart" to="/cart">
                  <i className="fa fa-shopping-basket" />
                  <span className="cart-value count_item_pr">0</span>
                  <span className="content">
                    <span className="content-inner">
                      <span className="text">Giỏ hàng</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-9 hidden-sm hidden-xs">
              <nav className="hidden-sm hidden-xs">
                <ul id="nav" className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Apple
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Samsung
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-3">
              <div className="block block-search">
                <form className="input-group search-bar search_form" action="#" method="get" role="search" id="voice-search">
                  <input type="hidden" name="_token"/>            
                  <input type="search" name="search-key" placeholder="Tìm kiếm sản phẩm... " 
                  className="input-group-field st-default-search-input search-text search-voice" autoComplete="off" />
                  <span className="input-group-btn">
                    <button className="btn icon-fallback-text" type="submit" style={{ color: '#1f3b47' }}>
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
