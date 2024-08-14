import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";

function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-[25%] h-screen flex flex-col ">
          <div className="">
            <div>My Name</div>
            <input
              type="text"
              placeholder="Search contacts"
              className="w-full"
            />
          </div>
          <div className="grid overflow-y-scroll scrollbarHide">
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
            <span className="p-2 bg-blue border border-b-gray-dark">nam1</span>
          </div>
        </div>

        <div className=" w-[75%]">
          <div className=" bg-pink grid grid-flow-col h-[12%] ">
            <div className=" justify-items-start">
              <button className=""><CgProfile className="pl-[2%] text-[60px] pt-[25%] hover:text-yellow " /></button>
            </div>
            <div className="grid justify-items-end pr-2">
              <button><HiDotsVertical className="pl-[2%] text-[30px] pt-[4%] hover:text-yellow" /></button>
            </div>
          </div>
          <div className="bg-green h-[80%] ">
            
          </div>
          <div className="bg-gray-dark h-[8%]">

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
