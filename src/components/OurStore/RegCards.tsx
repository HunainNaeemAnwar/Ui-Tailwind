import React from "react";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

const Cards = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) => {
  return (
    <div className="place-self-center ">
      <div className="px-10 py-10 relative group ">
        <div
          className="w-[200px] h-[210px] "
          style={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay absolute top-0 left-0 right-0 w-full h-full bg-[#000] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-10 flex-col  justify-end  text-black">
            {" "}
            <div className="ml-[260px] mb-[140px]">
              {" "}
              <Link href={"/"}>
                <BiHeart className="mt-6 mb-4 mr-4 w-6 h-6" />
              </Link>
              <Link href={"/"}>
                <BsEye className="mr-4 w-6 h-6" />
              </Link>{" "}
            </div>
            <button
              className="px-[102px] 
             bg-black rounded-b-[4px] py-[10px] text-[16px] text-white font-poppinsRegular"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>{" "}
      <h5 className="text-[16px] text-black mt-4 mb-1 font-poppinsBold">
        {title}
      </h5>
      <div className="flex flex-row gap-3">
        <p className="text-[16px] font-poppinsBold text-[#DB4444]">{`$ ${price}`}</p>
      </div>
    </div>
  );
};
export default Cards;
