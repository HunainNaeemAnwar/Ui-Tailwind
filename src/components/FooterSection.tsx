"use client";
import React from "react";
import { BiCopyright, BiLogoFacebook, BiSend } from "react-icons/bi";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import Image from "next/image";
import { ImTwitter } from "react-icons/im";

const FooterSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6 md:gap-y-8 w-full py-6 min-h-[440px] px-4 md:px-7 font-poppinsRegular bg-black text-white mt-20">
      {/* Exclusive Section */}
      <div className="flex flex-col gap-4 col-span-1 lg:col-span-1 mb-10 lg:mb-0 text-[16px] md:text-sm">
        <h3 className="font-poppinsBold text-xl">Exclusive</h3>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <form className="relative mt-4 md:mt-[80px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full pr-10 py-2 text-white text-[16px] bg-transparent border border-white rounded-md placeholder:text-white"
          />
          <button className="absolute right-2 top-2">
            <BiSend className="w-5 h-5 text-white" />
          </button>
        </form>
      </div>

      {/* Support Section */}
      <div className="flex flex-col gap-4 text-[16px] mb-10 lg:mb-0 md:text-sm">
        <h3 className="text-lg">Support</h3>
        <p>
          111 Bijoy Sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      {/* Account Section */}
      <div className="flex flex-col gap-4 text-[16px] mb-10 lg:mb-0 md:text-sm">
        <h3 className="text-lg">Account</h3>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>

      {/* Quick Link Section */}
      <div className="flex flex-col gap-4 text-[16px] mb-10 lg:mb-0 md:text-sm">
        <h3 className="text-lg">Quick Link</h3>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms Of Use</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Download App Section */}
      <div className="grid grid-cols-2 gap-y-4 col-span-1 mb-10 lg:mb-0 text-[16px] md:text-sm">
        <div className="col-span-2">
          <h3 className="text-lg">Download App</h3>
        </div>
        <div className="col-span-2">
          <p>Save $3 with App New User Only</p>
        </div>
        <div className="relative w-[60px] h-[60px] lg:w-[76px] lg:h-[76px] xl:w-[83px] xl:h-[83px]">
          <Image src="/images/footer/Bar-Code.png" fill alt="BarCode" />
        </div>
        <div className="flex flex-col gap-2 col-span-1">
          <div className="relative w-[90px] h-[25px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[40px]">
            <Image src="/images/footer/Play-Store.png" fill alt="PlayStore" />
          </div>
          <div className="relative w-[90px] h-[25px] lg:w-[100px] lg:h-[30px] xl:w-[110px] xl:h-[40px]">
            <Image src="/images/footer/App-Store.png" fill alt="AppStore" />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-start items-center mb-10 lg:mb-0 gap-4 mt-2 col-span-2">
          <Link href="/">
            <BiLogoFacebook className="w-6 h-6" />
          </Link>
          <Link href="/">
            <ImTwitter className="w-5 h-5" />
          </Link>
          <Link href="/">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link href="/">
            <GrLinkedinOption className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center border-t border-white border-opacity-35 col-span-2 lg:col-span-5 pt-4 mt-4">
        <BiCopyright className="w-4 h-4 mr-2" />
        <p className="text-[16px]">
          Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
