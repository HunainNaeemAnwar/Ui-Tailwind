import React from "react";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className=" w-full flex flex-row gap-9  text-white bg-black mt-[143px] pb-10  px-[75px]">
      {" "}
      <div className="w-full md:h-[444px] grid grid-cols-1  md:grid-cols-2 place-items-center mt-10 p-4 md:p-0 text-[16px] font-poppinsRegular bg-black">
        <div className="flex flex-col gap-6 pl-10">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={"/images/home/Apple.png"}
              width={50}
              height={60}
              alt="IphoneLogo"
            />
            <p>iPhone 14 Series</p>
          </div>
          <div className="text-[48px] font-interBold">
            <p>
              Up to 10% <br />
              off Voucher
            </p>
          </div>
          <div>
            <Link href={"/"}>
              <div className="flex items-center gap-1 underline">
                Shop Now <RiArrowRightLine className="w-4  h-4" />{" "}
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={"/images/home/Iphone.png"}
            width={500}
            height={400}
            alt="Iphone-Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
