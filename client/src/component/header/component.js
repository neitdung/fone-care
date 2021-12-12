import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import {
  ShoppingOutlined,
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";

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
    <div className="container">
      <Menu
        onClick={handleClick}
        selectedKeys={[currentCate]}
        mode="horizontal"
        className="menu"
      >
        <Menu.Item key="home" className="header-logo">
          <Link to={`/`}>
            <img alt="logo" src={`/logo512.png`} />
          </Link>
        </Menu.Item>
        {list.map((item) => (
          <Menu.SubMenu
            key={item._id}
            title={item.name}
            className="cate-item"
            onTitleClick={linkMainCate}
            popupClassName="cate-sub-menu"
          >
            {item.childCate.map((childItem) => (
              <Menu.Item key={childItem.slug}>
                <Link to={`/${childItem.slug}`}>{childItem.name}</Link>
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
        <Menu.Item key="journal" className="cate-item">
          <Link to="/journal">Journal</Link>
        </Menu.Item>
      </Menu>
      <Menu
        onClick={handleRightClick}
        mode="horizontal"
        className="menu right-menu"
      >
        <Menu.Item key="search" icon={<SearchOutlined />} />
        <Menu.Item key="wishlist" icon={<HeartOutlined />} />
        {isLogin ? (
          <Menu.SubMenu
            key="customer-popup-after"
            onClick={handleCustomerClick}
            icon={<UserOutlined />}
          >
            <Menu.Item key="account">My Account</Menu.Item>
            <Menu.Item key="logout">Sign out</Menu.Item>
          </Menu.SubMenu>
        ) : (
          <Menu.SubMenu
            key="customer-popup-before"
            onClick={handleCustomerClick}
            icon={<UserOutlined />}
          >
            <Menu.Item key="login">Sign In</Menu.Item>
            <Menu.Item key="signup">Sign Up</Menu.Item>
          </Menu.SubMenu>
        )}
        <Menu.Item key="cart" icon={<ShoppingOutlined />} />
      </Menu>
    </div>
  );
};

export default HeaderComponent;
