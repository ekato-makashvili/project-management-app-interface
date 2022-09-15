import React from "react";
import CardTemplate from "./CardTemplate";
import {
  AiOutlineMobile,
  AiFillPieChart,
  AiOutlineDatabase,
} from "react-icons/ai";
import { BsLaptop, BsCameraVideo } from "react-icons/bs";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineHeadsetMic } from "react-icons/md";

const Cards = () => {
  return (
    // Grid of Cards
    <div>
      <ul
        className="[&>li]:border-2 [&>li]:border-transparent [&>li]:rounded-3xl [&>li]:bg-white 
      lg:grid lg:grid-cols-4 lg:gap-10 [&>li]:pixel:mb-10 px-11 lg:py-10 pixel:py-0 -ml-1"
      >
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#EA5B92"
            icon={<AiOutlineMobile />}
            label="App Development"
            department="Marketing Team"
            deadline="1 week left"
            percentage="20%"
          />
        </li>
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#14C3A4"
            icon={<BsLaptop />}
            label="Web Instructors"
            department="Marketing Team"
            deadline="4 weeks left"
            percentage="14%"
          />
        </li>
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#4F96F7"
            icon={<TbDeviceHeartMonitor />}
            label="Web3 Managers"
            department="Marketing Team"
            deadline="5 days left"
            percentage="28%"
          />
        </li>
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#FA8035"
            icon={<AiFillPieChart />}
            label="Data Analysts"
            department="Marketing Team"
            deadline="2 weeks left"
            percentage="22%"
          />
        </li>
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#D189E1"
            icon={<IoWalletOutline />}
            label="Pay Stack"
            department="Big Data Dev"
            deadline="14 Weeks Left"
            percentage="55%%"
          />
        </li>
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#FB8135"
            icon={<AiOutlineDatabase />}
            label="Data Managers"
            department="Over Look"
            deadline="1.5 weeks left"
            percentage="29%"
          />
        </li>
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#7EBCE2"
            icon={<BsCameraVideo />}
            label="Cinematography"
            department="Main stream"
            deadline="2 days left"
            percentage="4%"
          />
        </li>
        <li className="hover:border-[#da51d5]">
          <CardTemplate
            circleColor="#EA5B92"
            icon={<MdOutlineHeadsetMic />}
            label="Feed Back"
            department="Customer Relations"
            deadline="3 Weeks Left"
            percentage="32%"
          />
        </li>
      </ul>
    </div>
  );
};

export default Cards;
