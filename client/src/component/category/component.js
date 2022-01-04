import React from "react";

const Category = () => {
  return (
   <>
    <div className="mainmenu">
        <span className="edit-span">
        <i className="fa fa-dashcube" aria-hidden="true" /> Danh mục sản phẩm
        </span>
        <div className="nav-cate">
        <ul id="menu2017">
            <li className="dropdown menu-item-count">
            <h3>
                <img src="" />
                <a href="#">Apple
                </a>
            </h3>
            </li>
            <li className="dropdown menu-item-count">
            <h3>
                <img src="" />
                <a href="#">Samsung
                </a>
            </h3>
            </li>
        </ul>
        </div>
    </div>
   </>
  );
};

export default Category;
