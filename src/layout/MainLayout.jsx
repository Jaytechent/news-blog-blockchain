import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { HomeFilled } from "@ant-design/icons";
const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="flex place-content-center font-extrabold ">
        <HomeFilled />
        <p className=" font-sans text-purple-950 ">THE GAWK HOUSE NEWS</p>
      </div>
      <div className="flex flex-wrap justify-center"></div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
