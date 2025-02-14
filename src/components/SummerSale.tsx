"use client";
import Link from "next/link";

const SummerSale = () => {
  return (
    <div className="absolute w-full h-[48px] bg-[#000] text-[##FAFAFA]  flex items-center justify-center  ">
      <div className="flex items-center ">
        <p className="font-poppinsRegular font-normal md:text-[14px] text-[12px]  ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href={"/"} className="underline font-poppinsBold  pl-2 ">
            ShopNow
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SummerSale;
