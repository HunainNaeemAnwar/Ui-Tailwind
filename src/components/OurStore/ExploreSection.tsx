import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import RegCards from "./RegCards";

const ExploreSection = () => {
  const flashSale = [
    {
      id: "1",
      image: "/images/home/Products/Product-1.png",
      title: "Breed Dry Dog Food",
      price: 100,
    },
    {
      id: "2",
      image: "/images/home/Products/Product-2.png",
      title: "CANON EOS DSLR Camera",
      price: 360,
    },
    {
      id: "3",
      image: "/images/home/Products/Product-3.png",
      title: "ASUS FHD Gaming Laptop",
      price: 700,
    },
    {
      id: "4",
      image: "/images/home/Products/Product-4.png",
      title: "Curology Product Set",
      price: 500,
    },
    {
      id: "5",
      image: "/images/home/Products/Product-5.jpg",
      title: "Kids Electric Car",
      price: 960,
    },
    {
      id: "6",
      image: "/images/home/Products/Product-6.png",
      title: "Jr. Zoom Soccer Cleats",
      price: 1160,
    },
    {
      id: "7",
      image: "/images/home/Products/Product-7.png",
      title: "GP11 Shooter USB Gamepad",
      price: 660,
    },
    {
      id: "8",
      image: "/images/home/Products/Product-8.png",
      title: "Quilted Satin Jacket",
      price: 660,
    },
  ];
  return (
    <section className=" flex flex-col gap-10 mt-[60px]  py-10  w-full lg:px-[40px]  xl:px-[75px]  ">
      <div className="font-poppinsBold  lg:text-[16px] text-[#DB4444] flex flex-row items-center gap-2">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <div>Today&apos;s</div>
      </div>
      <div className=" flex flex-col items-center  lg:flex-row justify-between  gap-[60px] text-[36px] font-interBold text-black">
        <p>Explore Our Products</p>
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
            discount?: number;
            image: string;
            price: number;
          }) => (
            <RegCards
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
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

export default ExploreSection;
