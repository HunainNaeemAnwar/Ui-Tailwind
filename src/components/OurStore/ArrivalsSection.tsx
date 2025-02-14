import React from "react";
import Image from "next/image";
import Link from "next/link";
const ArrivalsSection = () => {
  return (
    <section className=" flex  flex-col gap-10  mt-[60px] border-b border-black border-opacity-30 py-10  w-full lg:40px  xl:px-[75px]">
      <div className="font-poppinsBold text-[16px] text-[#DB4444] flex flex-row items-center gap-2">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <div>Featured</div>
      </div>
      <div className=" flex flex-col  lg:flex-row justify-between items-center  gap-[70px] text-[36px] font-interBold text-black">
        <p>New Arrival</p>
      </div>
      <div className="grid grid-cols-1 gap-y-6 gap-x-3 md:grid-row-2  md:grid-cols-2  px-0">
        <div className="xl:w-[600px] xl:h-[550px] lg:w-[550px] lg:h-[500px] md:h-[450px] md:w-[500px]  bg-black relative row-span-2">
          <Image
            src={"/images/home/Arrival-1.png"}
            width={500}
            height={500}
            alt="Arrival-Product-1"
            className="absolute bottom-0 left-10 md:w-[450px] md:h-[400px]"
          />
          <div className="absolute bottom-8 left-8 z-10 font-poppinsRegular text-[16px] bg-[#000] bg-opacity-0 flex flex-col  gap-2 justify-end ">
            <h3 className="text-[24px] font-interRegular ">PlayStation 5</h3>
            <p className="text-[14px]">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <Link href={""} className="underline">
              Shop Now
            </Link>
          </div>
        </div>
        <div className=" bg-black xl:w-[570px] xl:h-[286px] lg:w-[500px] lg:h-[200px] relative row-span-1">
          {" "}
          <Image
            src={"/images/home/Arrival-2.png"}
            width={432}
            height={286}
            alt="Arrival-Product-2"
            className="absolute right-0 bottom-0 "
          />
        </div>
        <div className="grid grid-cols-1  gap-10 md:grid-cols-2 w-[570px] h-[286px] row-span-1">
          <div className="bg-[#000] bg-opacity-90 xl:w-[280px] xl:h-[232px] lg:w-[] relative">
            {" "}
            <Image
              src={"/images/home/Arrival-3.png"}
              width={180}
              height={200}
              alt="Arrival-Product-3"
              className="absolute top-6 left-6"
            />
          </div>
          <div className="bg-[#000] bg-opacity-90  w-[280px] h-[232px] relative">
            {" "}
            <Image
              src={"/images/home/Arrival-4.png"}
              width={210}
              height={222}
              alt="Arrival-Product-4 "
              className="absolute top-0 left-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArrivalsSection;
