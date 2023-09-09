import React from 'react'

function NavlinkOne() {
  return (
    <>
    <div className="left-0 z-40 w-64 h-screen pt-20  transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 lg:pt-0">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 ">
        {/* <div className="font-medium text-md cursor-pointer flex items-start font-[Poppins] text-gray-800">
          In Play
        </div> */}

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl cursor-pointer bg-gray-800 md:hidden"
        >
          {!open ? <HiMenuAlt2 /> : <RxCross2 />}
        </div>

        <ul
          className={`md:flex md:items-center  text-gray-800 md:pb-0 pb-12 absolute md:static bg-slate-300 md:z-auto   w-full md:w-auto md:pr-8 md:pl-0 pl-0 transition-all duration-500 ease-in ${
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
  )
}

export default NavlinkOne