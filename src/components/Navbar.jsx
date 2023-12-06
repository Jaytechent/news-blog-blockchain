import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    "/",
    "health",
    "finance",
    "sport",
    "technology",
    "entertainment",
    "blockchain",
    "coinprice",
  ];

  return (
    <div className="shadow-md flex items-center justify-between h-16 px-8 bg-blue-100">
      <div className="flex items-center space-x-4">
        <NavLink to="/">
          {" "}
          <img
            src="https://yt3.googleusercontent.com/ytc/APkrFKauPr9uhUAD6EfuXUVng8oTpnLcdizjjmVSk1x0=s176-c-k-c0x00ffffff-no-rj"
            alt="Jaytechent brand logo"
            sizes="1rem"
            className="h-8 "
          />{" "}
        </NavLink>
      </div>

      <div className="flex items-center space-x-8">
        {links.map((item) => (
          <button className="  border-r-8">
            {" "}
            <NavLink
              key={item}
              className="font-extrabold capitalize no-underline"
              to={item}
            >
              {item === "/" ? "Home" : item}
            </NavLink>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
