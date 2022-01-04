import React from "react";
import { Row, Col, Typography, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import './style.scss';

const ProductItem = () => {
  return (
    <>
      <div className="owl-item active">
        <div className="item">
            <div className="ant-product-item">
            <div className="image-container">
                <Link to="/product" className="product-item-photo">
                <img className="product-image-photo img-responsive center-block" 
                    src="https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iPhone-13-Pro-max-128-tet.jpg" alt="#" />
                </Link>
            </div>
            <div className="box-info">
                <h2 className="product-item-name">
                <a href="#" className="product-item-link">
                    iPhone 13 Pro Max 128GB
                </a>
                </h2>
                <div className="product-reviews-summary">
                <div className="rating-summary">
                    <div className="bizweb-product-reviews-badge"/>
                </div>
                </div>
                <div className="item-price">
                <div className="item-price">
                    <div className="price-box price-final_price">
                    <span className="special-price">
                        <span className="price-container">
                        <span className="price-wrapper">
                            <span className="price">699,000</span>
                        </span>
                        </span>
                    </span>
                    <span className="old-price">
                        <span className="price-container">
                        <span className="price-wrapper">
                            <span className="price">800,000</span>
                        </span>
                        </span>
                    </span>
                    </div>
                </div>
                </div>
                <div className="box-hover hidden-sm hidden-xs hidden-md">
                <div className="add-to-links">
                    <div className="actions-primary">
                    <form action="/cart/add" method="post" className="variants form-nut-grid" 
                            data-id="product-actions-12668688" encType="multipart/form-data">
                        <input type="hidden" name="_token"/>
                        <input type="hidden" name="variantId"/>
                        <button className="tt-btn-addtocart btn-cart btn btn-gray left-to" title="Chọn sản phẩm" 
                                type="button" onclick="window.location.href='#'">
                        <i className="fa fa-link" />
                        </button>
                    </form>
                    </div>
                    <a href="#" className="quick-view" title="Xem nhanh">
                    <i className="fa fa-search" />
                    </a>
                </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProductItem;
