import React from "react";
import NavLinks from "./NavLinks";

const MobileNavLinks = ({
  linkObj,
}: {
  linkObj: { path: string; linkName: string }[];
}) => {
  return (
    <ul
      className="flex flex-col text-black md:hidden items-center justify-center gap-5 py-4 font-poppinsRegular text-[16px]  
      transition-transform duration-300 ease-in-out transform translate-x-100 
                         "
    >
      {linkObj.map((links: { path: string; linkName: string }, index) => (
        <li key={index}>
          <NavLinks path={links.path} linkName={links.linkName} />
        </li>
      ))}
    </ul>
  );
};

export default MobileNavLinks;
