import React from "react";
import { Result, Button, Carousel } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import './style.scss';
import ProductItem from "../../component/product/item";
import Category from "../../component/category";

const HomePage = () => {
  return (
   <>
    <div className="section_product container">
        <div className="row">
          <div className="col-md-3 hidden-sm hidden-xs">
            <Category/>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <div className="section-head">
                  <span className="group-icon"><i className="fa fa-dashcube" aria-hidden="true" /></span>
                  <h2>Sản phẩm nổi bật</h2>
                </div>
              </div>
              <div className="col-md-12 e-tabs not-dqtab ajax-tab-1" data-section="ajax-tab-1">
                <div className="content">
                  <div className="tab-1 tab-content current">
                    <div className="section-tour-owl2 products products-view-grid owl-carousel owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <ProductItem/>
                        </div>
                      </div>
                      <div className="owl-nav">
                        <div className="owl-prev disabled"><i className="fa fa-angle-left" aria-hidden="true" />
                        </div>
                        <div className="owl-next"><i className="fa fa-angle-right" aria-hidden="true" /></div>
                      </div>
                      <div className="owl-dots disabled" />
                    </div>
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

export default HomePage;
