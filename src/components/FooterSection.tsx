import React from "react";
import { BiCopyright, BiLogoFacebook, BiSend } from "react-icons/bi";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import Image from "next/image";
import { ImTwitter } from "react-icons/im";

const FooterSection = () => {
  return (
    <section className=" grid grid-cols-2  md:grid-cols-5 gap-x-4 gap-y-4 md:gap-y-8  md:grid-rows-[90%_10%] w-full py-6 bg-black h-[440px] px-7 font-poppinsRegular ">
      <div className="flex flex-col gap-4  col-span-2 md:col-span-1 text-[16px] lg:text-[17px]">
        <h3 className="font-poppinsBold  text-[22px] lg:text-[22px] ">
          Exclusive
        </h3>
        <p className="  ">Subscribe</p>
        <p className=" ">Get 10% off your first order</p>
        <form className="relative mt-6 md:mt-[100px]">
          <input
            type="text"
            placeholder="Enter your email"
            className=" xl:px-2 py-1 px-1  text-[#FAFAFA] text-[16px] bg-transparent border border-[#FAFAFA] rounded-[4px] "
          />
          <button className="absolute top-1 left-[180px] ">
            <BiSend className="w-5 h-5 text-[#FAFAFA] " />
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4 text-wrap col-span-1 text-[16px] lg:text-[17px]">
        <h3 className=" text-[20px]">Support</h3>
        <p>
          111 Bijoy sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="flex flex-col gap-4 col-span-1 text-[16px] lg:text-[17px]">
        <h3 className=" text-[20px]">Account</h3>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="flex flex-col gap-4 col-span-1 text-[16px] lg:text-[17px]">
        <h3 className=" text-[20px]">Quick Link</h3>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Terms Of Use</Link>
        <Link href={"/"}>FAQ</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="grid grid-cols-2 gap-y-4   col-span-1 text-[16px] lg:text-[17px]">
        <div className="col-span-2">
          {" "}
          <h3 className=" text-[20px] ">Download App</h3>
        </div>
        <div className="col-span-2">
          {" "}
          <p>Save $3 with App New User Only</p>
        </div>
        <div className="w-[60px] h-[60px] lg:w-[76px] lg:h-[76px] xl:w-[83px] xl:h-[83px]">
          <Image
            src={"/images/footer/Bar-Code.png"}
            width={100}
            height={100}
            alt="BarCode"
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 text-[16px] lg:text-[17px]">
          <div className="h-[25px] w-[90px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[40px]">
            <Image
              src={"/images/footer/Play-Store.png"}
              width={110}
              height={110}
              alt="PlayStore"
            />
          </div>
          <div className="h-[25px] w-[90px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[40px]">
            <Image
              src={"/images/footer/App-Store.png"}
              width={110}
              height={110}
              alt="AppStore"
            />
          </div>
        </div>
        <div className="flex justify-start  items-center lg:gap-7  gap-3 col-span-2 text-[16px] lg:text-[17px]">
          <div>
            <Link href={"/"}>
              {" "}
              <BiLogoFacebook className="w-6 h-6 boeder" />
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              {" "}
              <ImTwitter className="w-5 h-5" />
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              {" "}
              <GrLinkedinOption className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center place-content-center  pb-10 pt-6 border-t  border-white border-opacity-35   col-span-2 md:col-span-5 ">
        <BiCopyright className="w-4 h-4" />{" "}
        <p className="font-poppinsRegular text-[16px] ">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </section>
  );
};
export default FooterSection;
