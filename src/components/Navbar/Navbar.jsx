import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import DropdownItems from "../DropdownItems.jsx";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-800 ">
      <div className="flex justify-between">
        <div className="flex items-center font-medium md:ml-0">
          <div className=" relative z-50 p-2 md:w-auto w-full flex ">
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>

            <img
              src={logo}
              className="md:cursor-pointer h-10  ml-2 mt-[-0.4rem] lg:h-14 relative z-10"
              alt="LunaLogo"
            />
          </div>

          <ul className="md:flex text-slate-100 hidden capitalize text-lg items-center gap-8 md:gap-4 font-[Poppins] z-50">
            <li>
              <Link to="/" className="py-7 px-3 inline-block capitalize">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          {/* <div className="md:block hidden">
          <Button />
        </div> */}

          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-slate-800 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] z-50"}
        `}
          >
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Multi Markets
              </Link>
            </li>
            <NavLinks />
          </ul>
        </div>
        <DropdownItems />
      </div>
    </nav>
  );
};

export default Navbar;
