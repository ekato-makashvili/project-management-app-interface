import React from "react";
import { BsGrid } from "react-icons/bs";
import { IoCalendarClearOutline, IoEarth } from "react-icons/io5";
import { TbReportAnalytics, TbLogout } from "react-icons/tb";
import { BiMessageSquare } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { GiHorizonRoad } from "react-icons/gi";
import { VscSettings } from "react-icons/vsc";

const Menu = () => {
  return (
    <div
      className="
    "
    >
      <ul
        className="[&>li>svg]:w-6 [&>li>svg]:h-6 [&>li>p]:decoration-[#00B0D7]
      [&>li]:flex [&>li]:mt-10 [&>li>svg]:ml-10 [&>li>svg]:mr-5 pixel:[&>li>p]:pixel:hidden"
      >
        <li>
          <BsGrid className="hover:text-[#da51d5]" />
          <p className="hover:underline">Board</p>
        </li>
        <li>
          <IoCalendarClearOutline className="hover:text-[#da51d5]" />
          <p className="hover:underline">Plan Schedule</p>
        </li>
        <li>
          <TbReportAnalytics className="hover:text-[#da51d5]" />
          <p className="hover:underline">Reporting</p>
        </li>
        <li>
          <BiMessageSquare className="hover:text-[#da51d5]" />
          <p className="hover:underline">Messages</p>
        </li>
        <li>
          <RiTeamLine className="hover:text-[#da51d5]" />
          <p className="hover:underline">Team Member</p>
        </li>
        <li>
          <IoEarth className="hover:text-[#da51d5]" />
          <p>Tools plugin</p>
        </li>
        <li>
          <GiHorizonRoad className="hover:text-[#da51d5]" />
          <p className="hover:underline">Roadmap</p>
        </li>
        <li>
          <VscSettings className="hover:text-[#da51d5]" />
          <p className="hover:underline">Settings</p>
        </li>
      </ul>
      <div className="flex ml-14 mt-[155px]">
        <TbLogout className="w-6 h-6 mr-3 hover:text-[#da51d5] pixel:top-[500px]" />
        <p className="hover:underline decoration-[#00B0D7] pixel:hidden">
          Logout
        </p>
      </div>
    </div>
  );
};

export default Menu;
