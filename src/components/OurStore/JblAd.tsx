import React from "react";
import Image from "next/image";

const JblAd = () => {
  return (
    <div className=" bg-black mt-[60px] border-b border-black text-white border-opacity-30 py-10  w-full px-6 lg:px-[40px]  xl:px-[75px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start gap-[60px] mt-8">
          <div className="font-poppinsBold text-[16px] text-[#00FF66]">
            <p>Categories</p>
          </div>
          <div className="font-interBold text-[48px] ">
            <p>
              Enhance Your <br /> Music Experience
            </p>
          </div>
          <div>
            <div className="flex flex-row gap-4 text-[11px] font-poppinsBold text-black">
              <div className="rounded-[50%] px-4 py-4 bg-white flex flex-col items-center justify-center">
                <div>
                  <b>23</b>
                </div>{" "}
                Hours
              </div>
              <div className="rounded-[50%] px-5 py-4 bg-white flex flex-col items-center justify-center">
                <div>
                  <b>05</b>
                </div>{" "}
                Days
              </div>
              <div className="rounded-[50%] px-3 py-4 bg-white flex flex-col items-center justify-center">
                <div>
                  <b>59</b>
                </div>{" "}
                Minutes
              </div>
              <div className="rounded-[50%] px-3 py-4 bg-white flex flex-col items-center justify-center">
                <div>
                  <b>35</b>
                </div>{" "}
                seconds
              </div>
            </div>
          </div>
          <div>
            <button className="font-poppinsBold text-[16px] px-[60px] py-[16px]  rounded-[4px] bg-[#00FF66]">
              Buy Now!
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className=" xl:w-[500px] xl:h-[500px] w-[380px] h-[380px]  bg-[#373636] col-span-1 rounded-full mt-7  relative ">
            <Image
              src="/images/home/JBL.png"
              width={500}
              height={500}
              alt="JBL-Pic"
              className="absolute top-10  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default JblAd;
