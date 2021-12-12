import React from "react";
import { Row, Col, Typography, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <Row className="container-footer">
        <Col span={12} className="left-footer-col">
          <Typography.Title level={2}>Fone-care</Typography.Title>
          <Typography.Link>About Us</Typography.Link>
          <Typography.Link>Privacy Policy</Typography.Link>
          <Typography.Link>Term of Services</Typography.Link>
          <Typography.Link>FAQs</Typography.Link>
          <Typography.Text>Copyright ©2021</Typography.Text>
          <Typography.Text>Luftmensch Ltd</Typography.Text>
          <Typography.Text>Company no: +84866460800</Typography.Text>
        </Col>
        <Col span={12} className="right-footer-col">
          <Typography.Title level={2}>Subcribe as newsletter</Typography.Title>
          <Input.Search
            size="large"
            placeholder="Enter your email"
            enterButton="Send"
            suffix={<ArrowRightOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};

export default Footer;
