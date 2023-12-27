import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className=" bg-white shadow-sm">
      <div className="container md:mx-auto py-4 flex justify-between  ">
        <div className="font-[800] leading-6 flex items-center">
          <span className="text-theme1 text-xl md:text-3xl">
            <HiMenuAlt1 />
          </span>
          <span className="text-xl md:text-3xl">Qwik</span>
          
        </div>
        <div className="flex gap-2">
          <div className="flex md:gap-2 items-center font-bold text-[9px] md:text-sm leading-none">
            <MdOutlinePhoneInTalk />
            <span className="cursor-pointer">7865498375</span>
            <IoLocationOutline />
            <span className="cursor-pointer">Send a Address</span>
          </div>
          {/* <div className="flex p-0 justify-center align-center"></div> */}
          <button className="bg-theme1 text-[8px] md:text-sm rounded-sm  leading-none font-medium p-1">
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
