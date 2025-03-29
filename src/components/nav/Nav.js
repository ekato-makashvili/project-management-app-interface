import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import avatar4 from "../../assets/avatar-4.jpg"

const Nav = () => {
  return (
    // Navigation bar
    <div className="py-5 font-bold">
      <ul className="flex place-items-center">
        {/* Compute button*/}
        <li className="flex lg:ml-16 pixel:ml-0">
          {/* little blue circle */}
          <div className="rounded-full bg-[#00B0D7] h-5 w-5 border-2 border-[#ffffff] hover:border-[#00B0D7] mt-[1px] mr-1 "></div>
          <p className="text-black decoration-[#00B0D7] hover:underline">
            Compute
          </p>
        </li>
        {/* Search field */}
        <li className="lg:ml-46 pixel:ml-10">
          <AiOutlineSearch className="absolute ml-1 my-1 w-6 h-6  hover:text-[#da51d5]" />
          <input className="border-2 rounded-md lg:px-8 pixel:px-0 py-1 hover:border-gray-400"></input>
        </li>
        {/* Notifications */}
        <li className="lg:ml-[480px] pixel:ml-5">
          {/*Dot on the Notification bell*/}
          <div className="absolute rounded-full h-1.5 w-1.5 bg-[#FF0000] ml-3.5 border hover:border-[#da51d5]"></div>{" "}
          <IoNotificationsOutline className="w-6 h-6 hover:stroke-[#da51d5]" />
        </li>
        {/* User Section */}
        <li className="flex place-items-center lg:ml-[76px] pixel:ml-5">
          {/* User Avatar */}
          <img
            src={avatar4}
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-transparent hover:border-[#00B0D7]"
          />
          {/* User Name and Position */}
          <ul className="ml-3">
            <li className="text-xs text-black hover:underline decoration-[#00B0D7]">
              User name
            </li>
            <li className="text-[10px] hover:underline decoration-[#00B0D7]">
              Head HR
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
