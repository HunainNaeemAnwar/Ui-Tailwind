import React from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoCameraOutline, IoWatchOutline } from "react-icons/io5";
import { PiDeviceMobileLight } from "react-icons/pi";
import { RiGamepadLine, RiHeadphoneLine } from "react-icons/ri";

const CategorySection = () => {
  return (
    <section className=" flex  flex-col gap-10  mt-[60px] border-b border-black border-opacity-30 py-10  w-full lg:40px  xl:px-[75px]">
      <div className="font-poppinsBold text-[16px] text-[#DB4444] flex flex-row items-center gap-2">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <div>Categories</div>
      </div>
      <div className=" flex flex-col  lg:flex-row justify-between items-center  gap-[70px] text-[36px] font-interBold text-black">
        <p>Browse By Category</p>
        <div className="flex flex-row gap-4 mt-2  ">
          <BsArrowLeft className="w-6 h-6 hover:cursor-pointer" />
          <BsArrowRight className="w-6 h-6 hover:cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2 text-black text-[16px] font-poppinsRegular">
        <div className="flex flex-col justify-center items-center gap-4 border border-black rounded-[4px] border-opacity-30 px-12 py-8">
          <PiDeviceMobileLight className="w-16 h-16 text-black" />
          <p>Phones</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4  border border-black rounded-[4px]  border-opacity-30 px-12 py-8">
          <HiOutlineComputerDesktop className="w-16 h-16 text-black" />
          <p>Computers</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 border border-black rounded-[4px] border-opacity-30   px-12 py-8">
          <IoWatchOutline className="w-16 h-16 text-black" />
          <p>Smart Wachtes</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 border border-black rounded-[4px] border-opacity-30 px-12 py-8">
          <IoCameraOutline className="w-16 h-16 text-black" />
          <p>Camera</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 border border-black rounded-[4px] border-opacity-30  px-12 py-8">
          <RiHeadphoneLine className="w-16 h-16 text-black" />
          <p>HeadPhones</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 border border-black rounded-[4px] border-opacity-30   px-12 py-8">
          <RiGamepadLine className="w-16 h-16 text-black" />
          <p>Gaming</p>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
