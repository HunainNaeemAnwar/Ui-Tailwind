import React from "react";
import Image from "next/image";
import { BsGoogle } from "react-icons/bs";
import Link from "next/link";

const SignUpHeroSection = () => {
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
            <p className="font-interRegular text-[36px] ">Create an account</p>
            <p className=" mt-4">Enter your details below</p>
          </div>
          <form className="flex flex-col gap-10 mt-10">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-400 py-2 rounded-[4px]  focus:outline-none"
            />

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
          <Link href={"/LogIn"}>
            <button className="px-[140px] py-[16px] font-poppinsBold rounded-[4px]  text-white bg-[#DB4444] mt-10">
              Create Acount
            </button>
          </Link>
          <Link href={"/LogIn"}>
            <button className="px-[100px] py-[16px] bg-transparent border rounded-[4px] mt-5 border-gray-400 flex flex-row gap-3">
              <BsGoogle className="w-4 h-4" />
              Sign up with Google
            </button>
          </Link>

          <div className="flex flex-row items-center justify-center gap-2 mt-6">
            <p className="opacity-70">Already have account?</p>
            <Link
              href={"/LogIn"}
              className="opacity-70 font-poppinsBold underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUpHeroSection;
