import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { HiOutlineFilter } from "react-icons/hi";
import { VscSettings } from "react-icons/vsc";
import Cards from "./Cards";

const Main = () => {
  return (
    <div className="rounded-tl-3xl rounded-br-3xl bg-[#F2F3F7]">
      <div className="ml-10 font-bold">
        {/*Title */}
        <div className="flex place-items-center pt-7 mb-6">
          <div className="[&>p]:decoration-[#00B0D7]">
            <p className="text-xl hover:underline">Reporting</p>
            <p className="text-xs hover:underline lg:block pixel:hidden">
              All project in current month
            </p>
          </div>
          {/* Add button */}
          <div
            className="
            text-xl w-8 h-8 font-normal
            bg-[#00B0D7] text-white rounded-md border-2 border-transparent
            hover:text-[#da51d5] hover:border-[#da51d5]
            text-center pt-[1px] absolute right-0 mr-12"
          >
            +
          </div>
        </div>
        {/* Line */}
        <hr className="my-5 mr-12 transparent hover:border-[#00B0D7]"></hr>
        <div className="flex mb-5">
          {/* Progress Statuses */}
          <ul
            className="
            [&>li>div>p]:text-xs
            [&>li>div]:bg-white
            [&>li>div]:rounded-lg
            [&>li>div]:w-10 [&>li>div]:h-10
            [&>li>div]:border-2 [&>li>div]:border-transparent
            [&>li>p]:decoration-[#00B0D7] [&>li>div>p]:decoration-[#00B0D7]
            lg:flex [&>li]:flex [&>li]:place-items-center
            mr-60 [&>li]:mr-9 [&>li>p]:mr-3 [&>li>div>p]:m-3 pixel:hidden"
          >
            <li>
              <p className="hover:underline">All</p>
              <div className="hover:border-[#da51d5]">
                <p className="hover:underline">40</p>
              </div>
            </li>
            <li>
              <p className="hover:underline">Started</p>
              <div className="hover:border-[#da51d5]">
                <p className="hover:underline">25</p>
              </div>
            </li>
            <li>
              <p className="hover:underline">Approval</p>
              <div className="hover:border-[#da51d5]">
                <p className="hover:underline">12</p>
              </div>
            </li>
            <li>
              <p className="hover:underline">Finished</p>
              <div className="hover:border-[#da51d5]">
                <p className="hover:underline">40</p>
              </div>
            </li>
          </ul>

          {/* Filter and Sort*/}
          <ul
            className="
          [&>li]:h-10 [&>li]:rounded-lg [&>li]:bg-white [&>li]:border-2 [&>li]:border-transparent
          lg:flex absolute right-0 lg:mr-8 [&>li]:mr-4 [&>li>*]:mt-3 pixel:hidden"
          >
            <li className="flex w-20 hover:border-[#da51d5]">
              <VscSettings className="mx-2 hover:text-[#da51d5]" />
              <p className="text-xs hover:underline decoration-[#00B0D7]">
                More
              </p>
            </li>
            <li className="w-10 hover:border-[#da51d5]">
              <HiOutlineFilter className="ml-3 hover:text-[#da51d5]" />
            </li>
            <li className="w-10 hover:border-[#da51d5] hover:text-[#da51d5]">
              <IoReorderThreeOutline className="ml-3" />
            </li>
          </ul>
        </div>
      </div>
      {/* Cards */}
      <Cards />
    </div>
  );
};

export default Main;
