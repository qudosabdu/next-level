"use client";
import React, { useState } from "react";
import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../public/master_logo.png";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {

  let Links = [
    { name: "About us", link: "/" },
    { name: "Who we are", link: "/" },
    { name: "Our Solution", link: "/" },
    { name: "العربية", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" px-4 flex justify-between w-full pt-4 ">
      <div>
        <Image
          src={logo}
          alt="Master Logo"
          width={150}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div className="hidden md:flex lg:space-x-4 justify-between items-center pl-60">
        {Links.map((link, index) => {
          return (
            <Link href={link.link} key={index}>
              {
                <span
                  className="flex items-center font-normal hover:underline hover:text-blue-700"
                  key={index}
                >
                  {link.name === "العربية" ? (
                    <IoMdArrowDropdown
                      className="inline-block hover:"
                      onClick={() => setOpen(!open)}
                    />
                  ) : (
                    " "
                  )}
                  {link.name == "About Us" ? (
                    <span className="font-normal text-blue-700">
                      {link.name}
                    </span>
                  ) : (
                    link.name
                  )}
                </span>
              }
            </Link>
          );
        })}
      </div>
      <div className="hidden md:block sm:text-xs md:text-sm pr-2">
        <Button title="Get Started" />
      </div>
    </div>
  );
};

export default Nav;
