import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { BsEmojiGrin } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";



function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-[#A1E7FF] flex flex-col justify-end p-4">
          <div className="mb-4">
            <button className="">
              <IoSettings className="text-[32px]" />
            </button>
          </div>
          <div>
            <button className="">
              <RiAccountCircleFill className="text-[30px]" />
            </button>
          </div>
        </div>

        <div className="w-[30%] h-screen flex flex-col">
          <div className="">
            <h1 className="p-2 text-[25px] font-sans font-bold">Chats</h1>
            <div className="relative pl-3 pr-3">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-3 p-2 rounded-md bg-gray-light border-none"
              />
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[18px]" />
            </div>
          </div>
          <div className="grid overflow-y-scroll pt-3 scrollbar-hide">
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light" >nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
            <span className="p-4 bg-[#DFF2FF] border border-b-gray-light">nam1</span>
          </div>
        </div>
        <div className="flex-grow">
          <div className=" bg-[#A1E7FF] grid grid-flow-col h-[10%]">
            <div className="justify-items-start">
              <button className="">
                <CgProfile className="pl-[2%] text-[55px] pt-[25%] hover:text-yellow" />
              </button>
            </div>
            <div className="grid justify-items-end pr-2">
              <button>
                <HiDotsVertical className="pl-[2%] text-[25px] pt-[4%] hover:text-yellow" />
              </button>
            </div>
          </div>
          <div className="h-[81%]"></div>
          <div className="bg-[#A1E7FF] h-[9%] fixed bottom-0 w-full flex items-center px-4">
             <BsEmojiGrin className=" mr-1 text-[30px]" />
              <input 
              className="w-[59%] p-1 ml-1 rounded-md bg-gray-light border-none"
              type="text" 
              placeholder="Type your message"
              />
              <MdKeyboardVoice className="text-[30px] ml-1" />
            </div>
        </div>
     </div>
  </>
  );
}

export default Home;
