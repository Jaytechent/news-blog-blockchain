import React from "react";
import { HeartFilled, HeartTwoTone, HeartOutlined } from "@ant-design/icons";
import { Space } from "antd";
const Footer = () => (
  <Space className=" border-r-4 flex justify-center bg-blue-100">
    <p className=" font-bold">Designed with</p>

    <HeartFilled />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <HeartOutlined />
    <p className=" text-purple-950 font-sans font-bold">
      {" "}
      By Jaytechent @2023 All Right Reserved
    </p>
  </Space>
);
export default Footer;
