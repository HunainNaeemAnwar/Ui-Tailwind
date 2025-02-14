import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" grid  grid-cols-1 lg:grid-cols-2  lg:gap-3 w-full mt-[200px] py-[50px] pb-[100px]">
      <div className="relative xl:w-[700px] xl:h-[700px] bg-zinc-700  lg:w-[510px] lg:h-[510px] md:w-[400px] md:h-[500px] lg:block hidden">
        <Image
          src={"/images/signInUp/Hero-Pic.png"}
          objectFit="cover"
          layout="fill"
          alt="Hero Section Image"
          className="absolute left-0 "
        />
      </div>
      <div className=" flex flex-col justify-center items-center gap-10">
        {" "}
        <div className=" text-black  font-poppinsRegular   px-4 text-[16px] ">
          <div className="flex flex-col">
            <p className="font-interRegular text-[36px] ">
              Log in to Exclusive
            </p>
            <p className=" mt-4">Enter your details below</p>
          </div>
          <form className="flex flex-col gap-10 mt-10">
            <input
              type="text"
              placeholder="Email or Phone Number "
              className="border-b border-gray-400  py-2 rounded-[4px]  focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-400 py-2 rounded-[4px]  focus:outline-none"
            />
          </form>
          <div className="flex gap-4 items-center justify-center flex-row ">
            {" "}
            <Link href={"/OurStore"}>
              <button className="px-[50px] py-[16px] font-poppinsBold rounded-[4px]  mb-9 text-white bg-[#DB4444] mt-10">
                Log In
              </button>
            </Link>
            <Link
              href={"/OurStore"}
              className="text-[#DB4444] font-poppinsBold text-[16px]"
            >
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
