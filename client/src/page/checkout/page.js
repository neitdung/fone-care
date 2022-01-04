import React from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
   <>
        <div className="row checkout">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h4>Thông tin giao hàng</h4>
          <form method="post" action="#">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="form-group">
                  <label className>Họ và tên</label>
                  <div className="controls">
                    <input className="form-control " name="billing_fullname" required defaultValue placeholder="Họ và tên/ Fullname" autoComplete="off" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="form-group">
                  <label className>Email</label>
                  <div className="controls">
                    <input className="form-control " defaultValue required name="billing_email" type="email" autoComplete="off" placeholder="Email" defaultValue={""}/>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="form-group">
                  <label className>Điện thoại</label>
                  <div className="controls">
                    <input className="form-control " name="billing_phone" required defaultValue placeholder="Điện thoại/ Phonenumber" autoComplete="off" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="form-group">
                  <label className>Địa chỉ</label>
                  <div className="controls">
                    <input className="form-control" name="billing_address" defaultValue placeholder="Địa chỉ/ Address" autoComplete="off" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="form-group">
                  <label className>Ghi chú</label>
                  <div className="controls">
                    <textarea className="form-control" autoComplete="off" name="note" placeholder="Ghi chú/ Note" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="form-group">
                  <Link className="btn btn-default" to="/cart">
                    <i className="fa fa-angle-left" aria-hidden="true" />
                    Giỏ hàng
                  </Link>
                  <Link to="/checkout/success">
                    <button className="btn btn-primary">
                        Hoàn tất đơn hàng
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <h4>Thông tin đơn hàng</h4>
          <form method="post" action="#">
            <div className="page-content">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      Apple Iphone 13 Promax
                    </td>
                    <td className="text-right">
                      699,000
                      <br />
                      <s style={{color: '#ccc', fontSize: '11px'}}>800,000</s>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="text-info">
                      <strong>Tạm tính/ Provisional</strong>
                    </td>
                    <td className="text-info text-right">699,000</td>
                  </tr>
                  <tr>
                    <td className="text-primary">
                      <strong>Tổng cộng/ Total</strong>
                    </td>
                    <td className="text-primary text-right">
                      <strong>699,000</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </form>
        </div>
      </div>
   </>
  );
};

export default CartPage;
