import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const CoinPrice = () => {
  return (
    <>
      <h1 className="bg-blue-200 h-16 font-extrabold"> COMMING SOON </h1>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>TOP TEN COIN BASED ON MARKETCAP</h3>
        </div>
        <div>
          <h3 style={contentStyle}>LIVE PRICES OF LISTED COINS ACCROSS DEX</h3>
        </div>
        <div>
          <h3 style={contentStyle}>DEFI CAP</h3>
        </div>
        <div>
          <h3 style={contentStyle}>ARBITRAGE OPPORTUNITIES</h3>
        </div>
        <div>
          <h3 style={contentStyle}>TOKENS ON DEX ALONE</h3>
        </div>
        <div>
          <h3 style={contentStyle}>LATEST AIRDROP</h3>
        </div>
      </Carousel>
    </>
  );
};
export default CoinPrice;
