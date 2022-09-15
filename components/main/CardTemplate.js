import React from "react";
import { AiOutlineAim } from "react-icons/ai";
import { IoAlarmOutline } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";

const CardTemplate = (props) => {
  return (
    // Card Content
    <div className="ml-7 mr-3 [&>ul>li]:decoration-[#da51d5] [&>ul>li>p]:decoration-[#da51d5]">
      {/* Icon in Circle */}
      <div
        style={{ backgroundColor: props.circleColor }}
        className="w-14 h-14 rounded-full [&>svg]:w-8 [&>svg]:h-8 [&>svg]:text-white 
        drop-shadow-xl border-2 border-transparent
        [&>svg]:m-2.5 [&>svg]:absolute -mt-8
        hover:border-[#da51d5] [&>svg]:hover:text-[#da51d5]"
      >
        {props.icon}
      </div>
      <ul className="mt-5 [&>li]:mt-2 [&>li>p]:ml-2 [&>li>p]:text-xs">
        <li className="font-bold text-lg hover:underline">{props.label}</li>
        <li className="flex">
          <AiOutlineAim className="hover:text-[#da51d5]" />
          <p className="hover:underline">{props.department}</p>
        </li>
        <li className="flex">
          <IoAlarmOutline className="hover:text-[#da51d5]" />
          <p className="hover:underline">{props.deadline}</p>
        </li>
      </ul>
      {/* Line */}
      <hr className="my-3.5 mr-3.5"></hr>
      <div>
        <div className="flex text-xs [&>p]:decoration-[#da51d5]">
          <p className="hover:underline">Team Members</p>
          <p className="ml-9 hover:underline">Progress</p>
        </div>
        {/* Team members' avatars */}
        <ul
          className="
          flex [&>li>img]:rounded-full [&>li>img]:w-5 [&>li>img]:outline [&>li>img]:outline-transparent
          [&>li]:mr-2 mt-2 mb-7"
        >
          <li className="hover:border-spacing-3">
            <img
              src="./avatars/avatar-1.png"
              alt="avatar"
              className="hover:outline-[#da51d5]"
            />
          </li>
          <li>
            <img
              src="./avatars/avatar-2.jpg"
              alt="avatar"
              className="hover:outline-[#da51d5]"
            />
          </li>
          <li>
            <img
              src="./avatars/avatar-3.jpg"
              alt="avatar"
              className="hover:outline-[#da51d5]"
            />
          </li>
          <li>
            <BsPlusCircle className="hover:text-[#da51d5] mt-0.5" />
          </li>
          <li className="text-sm decoration-[#da51d5] hover:underline ml-2.5">
            {props.percentage}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardTemplate;
