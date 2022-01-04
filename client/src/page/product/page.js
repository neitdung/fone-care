import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
   <div className="col-lg-12 col-md-12 details-product">
    <div className="row product-bottom">
          <div className="col-xs-12 col-sm-6 col-lg-5 col-md-4">
            <div className="relative product-image-block ">
            <img id="myImg" src="https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iPhone-13-Pro-max-128-tet.jpg" 
                className="img-responsive center-block"/>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-lg-4 col-md-5 details-pro">
            <div className="product-top clearfix">
              <h1 className="title-head">Apple Iphone 13 Promax</h1>
              <div className="panel-product-line panel-product-rating clearfix">
                <div className="sapo-product-reviews-badge sapo-product-reviews-badge-detail" onclick="scrollToxx();"/>
              </div>
            </div>
            <div itemProp="offers">
              <link itemProp="url" href="#" />
              <meta itemProp="priceValidUntil" content="2030-11-05" />
              <div className="inve_brand">
                <span className="stock-brand-title"><strong><i className="fa fa-check-circle" /> Thương
                    hiệu: &nbsp;</strong></span>
                <span className="a-brand">Apple</span>
              </div>
              <div className="inventory_quantity bizweb deny 0">
                <span className="stock-brand-title"><strong><i className="fa fa-check-circle" /> Tình
                    trạng:</strong></span>
                <span className="a-stock a2">
                  <link itemProp="availability" href="#" /> &nbsp;Còn hàng
                </span>
              </div>
              <div className="price-box clearfix">
                <div className="special-price">
                  <span className="price product-price">699,000</span>
                </div>
                <div className="special-price">
                  <span className="price product-price" style={{color: 'gray', textDecoration: 'line-through'}}>
                    800,000
                  </span>
                </div>
              </div>
            </div>
            <div className="product-summary product_description margin-bottom-15 margin-top-15">
              <div className="rte description">
                <p />
              </div>
            </div>
            <div className="form-product">
              <form id="add-to-cart-form" action="/cart" method="get" className="form-inline has-validation-callback">
                <div className="form-group ">
                  <div className="btn-mua">
                    <Link to="/cart">
                        <button className="btn btn-lg btn-style btn-style-active btn-cart btn-soldout" id="btn-buy">
                            <span className="txt-main">Mua hàng</span>
                        </button>
                    </Link>
                  </div>
                </div>
                <button className="btn-callmeback" type="button" data-toggle="modal" data-target="#myModalCall">
                  <i className="fa fa-calendar-check-o" /> Hẹn lịch
                </button>
                <button className="btn-callmeback">
                  <a href="tel:29323423874" style={{color: '#fff'}}>
                    <i className="fa fa-phone" />29323423874
                  </a>
                </button>
              </form>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-lg-3 col-md-3 hidden-sm hidden-xs">
            <div className="sidebar-block service-block">
              <div className="sidebar-content">
                <div className="service-item service-item-two">
                  <div className="item-top">
                    <span className="img">
                      <img src="http://msneaker.vn/layout/ant_furniture/img/policy_image_1.png" alt="Giao hàng trong 24h" />
                    </span>
                    <span className="title">
                      Giao hàng trong 24h
                    </span>
                  </div>
                  <p className="caption">
                    Áp dụng với đơn hàng ở Hà Nội.
                  </p>
                </div>
                <div className="service-item service-item-two">
                  <div className="item-top">
                    <span className="img">
                      <img src="http://msneaker.vn/layout/ant_furniture/img/policy_image_2.png" alt="Giao hàng trong 24h" />
                    </span>
                    <span className="title">
                      Bảo đảm chất lượng
                    </span>
                  </div>
                  <p className="caption">
                    Tất cả các sản phẩm đều đảm bảo chất lượng.
                  </p>
                </div>
                <div className="service-item service-item-two">
                  <div className="item-top">
                    <span className="img">
                      <img src="http://msneaker.vn/layout/ant_furniture/img/policy_image_3.png" alt="Giao hàng trong 24h" />
                    </span>
                    <span className="title">
                      Sản phẩm chính hãng
                    </span>
                  </div>
                  <p className="caption">
                    Chúng tôi cung cấp các sản phẩm nhập khẩu chính hãng.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
   </div>
  );
};

export default ProductPage;
