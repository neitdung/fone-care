import React from "react";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const LoginPage = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button type="primary">Next</Button>}
    />
  );
};

export default LoginPage;
