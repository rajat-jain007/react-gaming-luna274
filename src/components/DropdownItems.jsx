import React, { useState } from "react";

// import { DropDownList } from "./Links";
// import { PiCoinVerticalDuotone } from "react-icons/pi";

import { Dropdown } from "flowbite-react";

import { RiLuggageDepositLine, RiLockPasswordFill } from "react-icons/ri";
import { BiMoneyWithdraw, BiTransferAlt, BiSolidReport } from "react-icons/bi";
import { AiOutlineAccountBook } from "react-icons/ai";
import { IoMdGitPullRequest } from "react-icons/io";
import { LuHistory, LuAlignHorizontalSpaceBetween } from "react-icons/lu";
import { GiClick } from "react-icons/gi";
import { FcRules } from "react-icons/fc";

// function Dropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpen2nd, setIsOpen2nd] = useState(false);
//   const [isOpen3rd, setIsOpen3rd] = useState(false);
//   return (
//     <>

//       {/* <div className="relative flex flex-col items-center rounded-lg ">
//         {/* 1st Button */}
//         <button
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="relative inline-flex items-center justify-center p-0.5 mt-0 mb-1 mr-0 text-sm md:mr-2 over text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  focus:outline-none md:ring-purple-200 md:focus:ring-purple-800"
//         >
//           <span className="relative  flex items-center gap-2 px-2 py-0 transition-all ease-in duration-75 tracking-wide bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex-nowrap">
//             {<MdManageAccounts />} My Account
//             {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
//           </span>
//           {isOpen && (
//             <ul className=" bg-blue-400 absolute top-7 flex text-black flex-col items-start  p-1 w-40 rounded-lg z-1000 ">
//               {DropDownList.map((links) => {
//                 const { id, items } = links;
//                 return (
//                   <li
//                     key={id}
//                     className="flex w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 z-auto"
//                   >
//                     {items}
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </button>
//         {/* 2nd Button */}
//         <button
//           onClick={() => setIsOpen2nd((prev) => !prev)}
//           className="relative  items-center justify-center p-0.5 mt-1 mb-1 mr-0 text-sm md:mr-2 text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  focus:outline-none md:ring-purple-200 md:focus:ring-purple-800"
//         >
//           <span className="relative flex items-center gap-2 px-2 py-0 transition-all ease-in duration-75 tracking-wide bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             {<PiCoinVerticalDuotone />} 1000
//             {!isOpen2nd ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
//           </span>
//           {isOpen2nd && (
//             <ul className=" bg-blue-400 absolute top-7 flex text-black flex-col items-start  p-1 w-40 rounded-lg z-1000">
//               {DropDownList.map((links) => {
//                 const { id, items } = links;
//                 return (
//                   <li
//                     key={id}
//                     className="flex w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 z-auto"
//                   >
//                     {items}
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </button>

//         {/* 3rd Button */}
//         <button
//           onClick={() => setIsOpen3rd((prev) => !prev)}
//           className="relative  items-center justify-center p-0.5 mt-1 mb-1 mr-0 text-sm md:mr-2 text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white  focus:outline-none md:ring-purple-200 md:focus:ring-purple-800"
//         >
//           <span className="relative flex items-center gap-2 px-2 py-0 transition-all ease-in duration-75 tracking-wide bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//             <span className="text-yellow-300">CG</span> 0.00
//             {!isOpen3rd ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
//           </span>
//           {isOpen3rd && (
//             <ul className=" bg-blue-400 absolute top-7 flex text-black flex-col items-start  p-1 w-40 rounded-lg z-1000">
//               {DropDownList.map((links) => {
//                 const { id, items } = links;
//                 return (
//                   <li
//                     key={id}
//                     className="flex w-full p-1 hover:bg-blue-300 hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 z-auto"
//                   >
//                     {items}
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </button>
//       </div> */}

//     </>
//   );
// }

function DropdownItems() {
  const customTheme = {
    inlineWrapper:
      "text-white h-4 mr-4 mt-1 mb-1 bg-gray-600 hover:bg-red-500 hover:text-black  focus:outline-none focus:ring-blue-300 font-sm md:font-md md:h-5 rounded-sm text-sm px-2 py-0 text-center inline-flex items-center dark:bg-blue-600 dark:focus:ring-blue-800 ",
  };
  return (
    <>
      <div className="flex flex-col">
        <Dropdown inline={true} theme={customTheme} label="My Account">
          <Dropdown.Header>
            <span className=" text-sm flex justify-between font-semibold">
              Demo | <span className="text-sm font-semibold">GMT+5:30</span>
            </span>
            <hr className="border border-b-black" />
          </Dropdown.Header>

          <Dropdown.Item icon={RiLuggageDepositLine}>Deposit</Dropdown.Item>
          <Dropdown.Item icon={BiMoneyWithdraw}>Withdrawal</Dropdown.Item>
          <Dropdown.Item icon={BiTransferAlt}>Fund Transfer</Dropdown.Item>
          <Dropdown.Item icon={RiLockPasswordFill}>
            Change Password
          </Dropdown.Item>
          <Dropdown.Item icon={AiOutlineAccountBook}>
            Account Statement
          </Dropdown.Item>
          <Dropdown.Item icon={IoMdGitPullRequest}>Request</Dropdown.Item>
          <Dropdown.Item icon={BiSolidReport}>Profit Loss Report</Dropdown.Item>
          <Dropdown.Item icon={LuHistory}>Bet History</Dropdown.Item>
          <Dropdown.Item icon={LuAlignHorizontalSpaceBetween}>
            Unsettle Bet
          </Dropdown.Item>
          <Dropdown.Item icon={GiClick}>Set Button Value</Dropdown.Item>
          <Dropdown.Item icon={FcRules}>Rules</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="bg-red-500">Sign out</Dropdown.Item>
        </Dropdown>

        <Dropdown
          inline={true}
          theme={customTheme}
          label="1000"
          className="p-1 font-semibold"
        >
          <Dropdown.Item className="bg-gray-200 shadow-lg mb-2 rounded-md text-left">
            Exposure
            <br />0
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="bg-gray-200 shadow-lg mb-2 rounded-md text-left">
            Bonus
            <br />0
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="bg-gray-200 shadow-lg mb-2 rounded-md text-left">
            P & L<br />0
          </Dropdown.Item>
          <Dropdown.Item className="bg-red-500 rounded-md">
           Close
          </Dropdown.Item>
        </Dropdown>

        <Dropdown
          inline={true}
          theme={customTheme}
          label="CG 0.00"
          className="p-1 font-semibold"
        >
          <Dropdown.Item className="bg-gray-200 shadow-lg mb-2 rounded-md text-left">
            C.G Exposure
            <br />0
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="bg-gray-200 shadow-lg mb-2 rounded-md text-left">
            C.G P&L
            <br />0
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="bg-red-500 rounded-md">
           Close
          </Dropdown.Item>
        </Dropdown>
      </div>
    </>

    //     <div class="relative" data-te-dropdown-ref>
    //   <button
    //     class="flex items-center whitespace-nowrap rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] motion-reduce:transition-none"
    //     type="button"
    //     id="dropdownMenuButton6"
    //     data-te-dropdown-toggle-ref
    //     aria-expanded="false"
    //     data-te-ripple-init
    //     data-te-ripple-color="light">
    //     Danger
    //     <span class="ml-2 w-2">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         class="h-5 w-5">
    //         <path
    //           fill-rule="evenodd"
    //           d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
    //           clip-rule="evenodd" />
    //       </svg>
    //     </span>
    //   </button>
    //   <ul
    //     class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    //     aria-labelledby="dropdownMenuButton6"
    //     data-te-dropdown-menu-ref>
    //     <li>
    //       <a
    //         class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
    //         href="#"
    //         data-te-dropdown-item-ref
    //         >Action</a
    //       >
    //     </li>
    //     <li>
    //       <a
    //         class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
    //         href="#"
    //         data-te-dropdown-item-ref
    //         >Another action</a
    //       >
    //     </li>
    //     <li>
    //       <a
    //         class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
    //         href="#"
    //         data-te-dropdown-item-ref
    //         >Something else here</a
    //       >
    //     </li>
    //   </ul>
    // </div>
  );
}

export default DropdownItems;
