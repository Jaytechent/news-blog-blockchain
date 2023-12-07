import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const links = [
    "/",
    "health",
    "finance",
    "sport",
    "technews",
    "coins",
    "music",
    "crypto",
  ];

  return (
    <div className="shadow-md flex items-start lg:items-center gap-2 justify-between px-4 bg-blue-100">
      <NavLink to="/">
        {" "}
        <img
          src="https://yt3.googleusercontent.com/ytc/APkrFKauPr9uhUAD6EfuXUVng8oTpnLcdizjjmVSk1x0=s176-c-k-c0x00ffffff-no-rj"
          alt="Jaytechent brand logo"
          sizes="1rem"
          className="h-8 "
        />{" "}
      </NavLink>

      <div className="flex  items-center gap-2 flex-wrap">
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
