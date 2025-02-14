import Cards from "@/components/OurStore/Cards";
import React from "react";

const SellingProducts = () => {
  const products = [
    {
      id: "1",
      image: "/images/home/Best-Selling-Product/Product-1.png",
      title: "The north coat",
      price: 260,
      discount: 360,
    },
    {
      id: "2",
      image: "/images/home/Best-Selling-Product/Product-2.png",
      title: "Gucci duffle bag",
      price: 960,
      discount: 1160,
    },
    {
      id: "3",
      image: "/images/home/Best-Selling-Product/Product-3.png",
      title: "RGB liquid CPU Cooler",
      price: 160,
      discount: 170,
    },
    {
      id: "4",
      image: "/images/home/Best-Selling-Product/Product-4.png",
      title: "Small BookSelf",
      price: 300,
      discount: 300,
    },
  ];
  return (
    <section className=" flex flex-col gap-10 mt-[60px] border-b border-black border-opacity-30 py-10  w-full lg:px-[40px]  xl:px-[75px]  ">
      <div className="font-poppinsBold  lg:text-[16px] text-[#DB4444] flex flex-row items-center gap-2">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <div>Today&apos;s</div>
      </div>
      <div className=" flex flex-col items-center  lg:flex-row justify-between  gap-[60px] text-[36px] font-interBold text-black">
        <p>Best Selling Products </p>
        <div className=" px-[20px] lg:px-[40px]">
          <button className="bg-[#DB4444] text-[16px] font-poppinsRegular py-3 px-8 rounded-[4px]   text-white">
            View All
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 ">
        {" "}
        {products.map(
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
      <div className="w-full  flex items-center justify-center"></div>
    </section>
  );
};
export default SellingProducts;
