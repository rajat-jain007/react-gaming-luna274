import React, { useState } from "react";
import { navLinks } from "./Links";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
function Navlinks() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full left-0 ">
        <div className="md:flex py-4 md:px-10 left-0 ">
          {/* <div className="font-medium text-md cursor-pointer flex items-start font-[Poppins] text-gray-800">
            In Play
          </div> */}

          <div
            onClick={() => setOpen(!open)}
            className="text-2xl cursor-pointer md:hidden"
          >
            {!open ? <HiMenuAlt2 /> : <RxCross2 />}
          </div>

          <ul
            className={`md:flex md:items-center text-gray-800 md:pb-0 pb-12 absolute md:static bg-slate-300 md:z-auto w-full md:w-auto md:pr-8 md:pl-0 pl-0 transition-all duration-500 ease-in ${
              !open ? "top-[-490px]" : "top-18 opacity-100"
            } `}
          >
            {navLinks.map((links) => {
              const { id, title, href } = links;
              return (
                <li key={id} className="md:ml-8 md:text-lg">
                  <a
                    href={href}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="bg-indigo-600 w-full h-screen font-semibold">NavLinks </div>) */}
    </>
  );
}

export default Navlinks;
