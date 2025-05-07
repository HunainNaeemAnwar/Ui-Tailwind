import React from "react";
import NavLinks from "./NavLinks";

const MobileNavLinks = ({
  linkObj,
  navState,
}: {
  linkObj: { path: string; linkName: string }[];
  navState: () => void;
}) => {
  return (
    <ul
      className="flex absolute top-0 right-0 bg-gray-50 py-10 flex-col w-full  text-black md:hidden items-center justify-center gap-5 font-poppinsRegular text-[16px]  
      transition-transform duration-300 ease-in-out transform translate-x-100 
                         "
    >
      {linkObj.map((links: { path: string; linkName: string }, index) => (
        <li key={index} onClick={navState}>
          <NavLinks path={links.path} linkName={links.linkName} />
        </li>
      ))}
    </ul>
  );
};

export default MobileNavLinks;
