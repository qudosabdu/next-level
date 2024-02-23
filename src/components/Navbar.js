// components/Navbar.js
"use client";
import popus from "../../public/popus.png";
import Image from "next/image";
import styles from "./style.module.css"; // Import the styles
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Nav from "./Nav";
import master_logo from "../../public/master_logo.png";
import elipsRight from "../../public/EllipseRight.png";
import React, { useState } from "react";
import Button from "./Button";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../../public/master_logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  let Links = [
    { name: "About us", link: "/" },
    { name: "Who we are", link: "/" },
    { name: "Our Solution", link: "/" },
    { name: "العربية", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className={`p-4 w-full ${styles.nav}`} style={{ zIndex: 1 }}>
      <nav className="">
        <div className="flex justify-between">
          <div className="hidden md:flex space-x-10 items-center"></div>
        </div>
        
      </nav>
      <div className="flex justify-between items-center w-full h-full bg-black text-white px-10 py-5 space-x-10">
        <div>
          <div>
            <div>
              <span className="text-xs font-sans md:text-sm md:font-extralight">
                IT Systems Company
              </span>
              <h2 className="text-base md:text-4xl font-bold leading-tight mt-2">
                An IT Boutique House
              </h2>
              <hr
                className="w-[60%] h-0.5 md:w-[28.5%] md:h-1 bg-blue-700 md:mt-2 md:mb-4 border-none
                border-0 border-blue-700"
              />
            </div>
            <div className="text-md font-normal mt-4">
              <p
                className="
                text-gray-50
                font-thin
                md:text-2xl
                leading-relaxed
                w-[80%]
              "
              >
                Where technology is finely curated & elegantly tailored for
                every client’s journey
              </p>
            </div>
          </div>
          <div
            className="
            flex
            items-center
            w-full
            mt-6
            space-x-2
            md:space-x-4"
          >
            <Button
              title="Book an Appointment"
              className="
              md:flex md:space-x-4 
              "
            />
            <Button title="Explore More" />
          </div>
        </div>
        <div className="">
          <Image
            width={500}
            height={500}
            src={popus}
            alt="Master Logo"
            className="object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
