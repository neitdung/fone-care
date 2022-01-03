import React, {useEffect} from "react";
import { LOGIN_OFFICER } from "../../query/officer.query";
import { useMutation } from "@apollo/client";
import { Row, Col, Typography, Form, Input, Button, message, Skeleton } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { saveToken, getToken, getRole } from "../../ultis/auth";
import { ROLE_SUPPLIER } from "../../ultis/roles";
import "./index.scss";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { span: 14 },
};

const buttonLayout = {
  wrapperCol: { offset: 6, span: 12 },
};
const LoginPage = () => {
  let navigate = useNavigate();
  useEffect(()=> {
    if (getToken()) {
      let role =getRole();
      if (role) {
        role === ROLE_SUPPLIER ? navigate("/imei") : navigate("/dashboard");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [loginOfficer, { data, loading, error }] = useMutation(LOGIN_OFFICER);

  useEffect(()=> {
    if (error) message(`Submission error! ${error.message}`);
    if (data) {
      saveToken(data.loginOfficer.token);
      let role =getRole();
      if (role) {
        role === ROLE_SUPPLIER ? navigate("/imei") : navigate("/dashboard");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


  const handleSubmit = (values) => {
    loginOfficer({
      variables: {
        input: values
      },
    });
 };
  return (
    <Skeleton loading={loading}>
      <Row className="main-container">
        <Col span={14} className="left-col" />
        <Col span={10} className="right-col">
          <LockOutlined className="lock-icon" />
          <Typography.Title level={3}>Sign in</Typography.Title>
          <Form onFinish={handleSubmit} {...layout} className="login-form">
            <Form.Item
              label="Username"
              name="username"
              {...tailLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              {...tailLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...buttonLayout}>
              <Button type="primary" htmlType="submit" size="large">
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      </Skeleton>
  );
};

export default LoginPage;
