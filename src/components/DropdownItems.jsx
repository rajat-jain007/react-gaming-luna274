import React, { useState } from "react";

import { Dropdown } from "flowbite-react";
import { DropDownList } from "./Links";

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
          {DropDownList.map((links) => {
            const { id, items, icon } = links;
            return <Dropdown.Item icon={icon}>{items}</Dropdown.Item>;
          })}
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
          <Dropdown.Item className="bg-red-500 rounded-md text-black">
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
          <Dropdown.Item className="bg-red-500 rounded-md text-black">
            Close
          </Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
}

export default DropdownItems;
