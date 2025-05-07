"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import NavLinks from "./NavLinks";
import { HiBars3 } from "react-icons/hi2";
import MobileNavLinks from "./MobileNavLinks";

const HeaderSection = () => {
  const navLinks = [
    {
      linkName: "Home",
      path: "/OurStore",
    },
    {
      linkName: "About",
      path: "/About",
    },
    {
      linkName: "Contact",
      path: "/Contact",
    },
    {
      linkName: "Sign Up",
      path: "/",
    },
    {
      linkName: "Cart",
      path: "/OurCart",
    },
  ];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="absolute top-[48px] border-b bg-[#f0f0f0]   border-black border-opacity-20 w-full p-3 z-50">
      <div className=" md:px-[30px] flex items-center justify-between mt-2 lg:px-14 px-3  ">
        {" "}
        <div className="md:hidden block mt-1 z-30">
          {!isOpen ? (
            <button onClick={() => setIsOpen(true)}>
              <HiBars3 className="text-black w-6 h-6  " />
            </button>
          ) : (
            <button onClick={() => setIsOpen(false)}>
              <HiBars3 className="text-black w-6 h-6 " />
            </button>
          )}
        </div>
        <h2 className="font-satoshi text-black text-[30px]  ">Exclusive</h2>{" "}
        <ul className="md:flex items-center gap-3 md:gap-4 lg:gap-10 font-poppinsRegular text-black text-[17px]  hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLinks linkName={link.linkName} path={link.path} />
            </li>
          ))}
        </ul>
        <div className="bg-white  ">
          <form className="relative text-[12px] ">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="font-poppinsRegular tracking-tighter border text-[12px] px-6 py-3 pr-9 h-[33px] text-black"
            />
            <button className="absolute right-2 top-[8px] sm:px-3 md:px-0">
              <BiSearch className="w-4 h-4 text-black " />
            </button>
          </form>
        </div>
      </div>
      {isOpen ? <MobileNavLinks linkObj={navLinks} navState={() => setIsOpen(false)} /> : null}
    </nav>
  );
};

export default HeaderSection;
