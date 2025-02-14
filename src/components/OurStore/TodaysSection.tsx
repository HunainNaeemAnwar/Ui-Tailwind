import Cards from "@/components/OurStore/Cards";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TodaysSection = () => {
  const flashSale = [
    {
      id: "1",
      image: "/images/home/Today-Sale/flash-sale-1.png",
      title: "HAVIT HV-G92 Gamepad",
      price: 120,
      discount: 160,
    },
    {
      id: "2",
      image: "/images/home/Today-Sale/flash-sale-2.png",
      title: "AK-900 Wired Keyboard",
      price: 960,
      discount: 1160,
    },
    {
      id: "3",
      image: "/images/home/Today-Sale/flash-sale-3.png",
      title: "IPS LCD Gaming Monitor",
      price: 370,
      discount: 400,
    },
    {
      id: "4",
      image: "/images/home/Today-Sale/flash-sale-4.png",
      title: "S-Series Comfort Chair",
      price: 375,
      discount: 400,
    },
  ];
  return (
    <section className=" flex flex-col gap-10 mt-[60px] border-b border-black border-opacity-30 py-10  w-full lg:px-[40px]  xl:px-[75px]  ">
      <div className="font-poppinsBold  lg:text-[16px] text-[#DB4444] flex flex-row items-center gap-2">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <div>Today&apos;s</div>
      </div>
      <div className=" flex flex-col items-center  lg:flex-row justify-between  gap-[60px] text-[36px] font-interBold text-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {" "}
          <p>Flash Sales</p>
          <div className="flex flex-row  gap-4">
            <div className="flex flex-col ">
              <p className="text-[12px] font-poppinsBold">Days</p>
              <p>03</p>
            </div>
            <div>
              <p className="text-[#DB4444]">:</p>
            </div>
            <div className="flex flex-col  ">
              <p className="text-[12px] font-poppinsBold">Hours</p>
              <p>23</p>
            </div>
            <div>
              <p className="text-[#DB4444]">:</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-[12px] font-poppinsBold">Minutes</p>
              <p>19</p>
            </div>
            <div>
              <p className="text-[#DB4444]">:</p>
            </div>
            <div className="flex flex-col   ">
              <p className="text-[12px] font-poppinsBold">Seconds</p>
              <p>56</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4  ">
          <BsArrowLeft className="w-6 h-6 hover:cursor-pointer" />
          <BsArrowRight className="w-6 h-6 hover:cursor-pointer" />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 ">
        {" "}
        {flashSale.map(
          (item: {
            id: string;
            title: string;
            discount: number;
            image: string;
            price: number;
          }) => (
            <Cards
              key={item.id}
              title={item.title}
              discount={item.discount}
              image={item.image}
              price={item.price}
              percentage={Math.round(
                ((item.discount - item.price) / item.discount) * 100
              )}
            />
          )
        )}
      </div>
      <div className="w-full  flex items-center justify-center">
        <div className="px-[40px]">
          <button className="bg-[#DB4444] text-[16px] font-poppinsRegular py-3 px-12 rounded-[4px]   text-white">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
export default TodaysSection;
