import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const BlockchainPage = () => {
  return (
    <>
      <h1 className="bg-blue-100 h-8 font-extrabold   place-content-center  ">
        {" "}
        COMMING SOON{" "}
      </h1>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>LATEST AIRDROP</h3>
        </div>
        <div>
          <h3 style={contentStyle}>DECENTRALIZED FINANCE</h3>
        </div>
        <div>
          <h3 style={contentStyle}>EXCHANGE NEWS</h3>
        </div>
        <div>
          <h3 style={contentStyle}>BEST PERFORMING TOKENS</h3>
        </div>
        <div>
          <h3 style={contentStyle}>CHAIN TO INVEST</h3>
        </div>
        <div>
          <h3 style={contentStyle}>LATEST AIRDROP</h3>
        </div>
      </Carousel>
    </>
  );
};
export default BlockchainPage;
