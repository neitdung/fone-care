import React from "react";
import { Row, Col, Typography, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import './style.scss';

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-top container">
          <div className="footer-static row">
            <div className="f-col f-col1 col-md-4 col-sm-12 col-xs-12">
              {/* <div className="logo-footer">
                <a href="#">
                  <img src="/"/>
                </a>
              </div> */}
              <div className="footer-content">
                <ul className="info">
                  <li>Địa chỉ: Hà Nội</li>
                  <li>Điện thoại: <a href="tel:29323423874"> 29323423874</a></li>
                  <li>Website: <a href="#">font-care.com</a></li>
                  <li>Email: <a href="mailto:admin@fone-care.com">admin@fone-care.com</a>
                  </li>
                </ul>
                <div className="social-icons">
                  <ul>
                    <li className="facebook"><a title="facebook" href="#" target="_blank"><i className="fa fa-facebook-f" /></a></li>
                    <li className="googleplus"><a title="googleplus" href target="_blank"><i className="fa fa-google-plus" /></a></li>
                    <li className="youtube"><a title="youtube" href target="_blank"><i className="fa fa-pinterest-p" /></a></li>
                    <li className="pinterest"><a title="pinterest" href target="_blank"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="f-col f-col2 col-md-2 col-sm-6 col-xs-6">
              <div className="footer-title">
                <h3>Hướng dẫn</h3>
              </div>
              <div className="footer-content">
                <ul className="menu">
                </ul>
              </div>
            </div>
            <div className="f-col f-col3 col-md-2 col-sm-6 col-xs-6">
              <div className="footer-title">
                <h3>Chính sách</h3>
              </div>
              <div className="footer-content">
                <ul className="menu">
                </ul></div>
            </div>
            <div className="f-col f-col4 col-md-4 col-sm-12 col-xs-12">
              <div className="footer-title">
                <h3>Nhận email khuyến mãi</h3>
              </div>
              <div className="footer-content">Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn<div className="block newsletter">
                  <div className="content">
                    <form className="form subscribe" action="/newsletter" method="POST">
                      <input type="hidden" name="_token"/>
                        <div className="field newsletter">
                        <div className="control">
                          <input name="email" type="email" id="newsletter" defaultValue placeholder="Nhập địa chỉ Email của bạn" required />
                          <div className="actions">
                            <button className="action subscribe primary" name="subscribe" title="Đăng ký" type="submit">
                              <span>Đăng ký</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
