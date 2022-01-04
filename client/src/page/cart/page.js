import React from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
   <>
        <div className="row">
        <div className="col-md-12">
          <div className="shopping-cart">
            <div className="visible-md visible-lg">
              <div className="shopping-cart-table">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="cart-title">Giỏ hàng <span>(<span className="count_item_pr">1</span> sản phẩm)</span></h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-main cart_desktop_page cart-page">
                    <form id="shopping-cart" action="" method="get" className="has-validation-callback">
                      <div className="cart page_cart cart_des_page hidden-xs-down">
                        <div className="col-xs-9 cart-col-1">
                          <div className="cart-tbody">
                            <div className="row shopping-cart-item productid-20633434">
                              <div className="col-xs-3 img-thumnail-custom">
                                <p className="image">
                                  <img className="img-responsive" src="https://cdn.tgdd.vn/Products/Images/42/230529/TimerThumb/iPhone-13-Pro-max-128-tet.jpg" alt="Jordan 1 Low &quot;Black Cyber&quot;" style={{width: '100px'}} />
                                </p>
                              </div>
                              <div className="col-right col-xs-9">
                                <div className="box-info-product">
                                  <p className="name">
                                    <Link to="/product">Apple Iphone 13 Promax</Link>
                                  </p>
                                  <p className="action"><a href="#" className="btn btn-link btn-item-delete remove-item-cart">Xóa</a>
                                  </p>
                                </div>
                                <div className="box-price">
                                  <p className="price">699,000</p>
                                </div>
                                <div className="box-info-x">
                                  <p>X</p>
                                </div>
                                <div className="quantity-block">
                                  <div className="input-group bootstrap-touchspin">
                                    <div className="input-group-btn">
                                      <p className="form-control quantity-r2 quantity js-quantity-product input-text number-sidebar input_pop input_pop qtyItem20633434" id="qtyItem20633434">1
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-3 cart-col-2 cart-collaterals cart_submit">
                          <div id="right-affix">
                            <div className="each-row">
                              <div className="box-style fee">
                                <p className="list-info-price"><span>Tạm tính: </span>
                                    <strong className="totals_price price _text-right text_color_right1">699,000</strong>
                                </p>
                              </div>
                              <div className="box-style fee">
                                <div className="total2 clearfix"><span className="text-label">Thành
                                    tiền: </span>
                                  <div className="amount">
                                    <p><strong className="totals_price">699,000</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <Link to="/checkout">
                                <button type="submit" className="button btn-proceed-checkout btn btn-large btn-block btn-danger btn-checkout">
                                  Thanh toán ngay
                                </button>
                              </Link>
                              <Link to="/">
                                <button className="button btn-proceed-checkout btn btn-large btn-block btn-danger btn-checkouts" 
                                  title="Tiếp tục mua hàng" type="button" onclick="window.location.href='/'">Tiếp
                                  tục
                                  mua hàng</button>
                              </Link>
                            </div>
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
      </div>
   </>
  );
};

export default CartPage;
