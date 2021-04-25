import React from "react";
import { Button, Form, I, Input } from "antd";
import "../styles/register.scss";
export default function Register() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "${label} is Required!",
    // types: {
    //   email: '${label} is not a valid email!',
    //   number: '${label} is not a valid number!',
    // },
    // number: {
    //   range: '${label} must be between ${min} and ${max}',
    // },
  };
  const Onsubmit = (values) => {
    console.log("Form Submit", values);
  };
  return (
    <div className="container">
      <Form {...layout} onFinish={Onsubmit} validateMessages={validateMessages}>
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Age">
          <Input />
        </Form.Item>
        <Form.Item label="Website">
          <Input />
        </Form.Item>
        <Form.Item label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="ghost" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
