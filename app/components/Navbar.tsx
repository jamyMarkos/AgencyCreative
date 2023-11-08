"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedinSquare, BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative">
      <div className="bg-[#003B36] w-full py-4 px-[120px]">
        <div className="flex items-center justify-between mx-auto px-6">
          <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] transition duration-300 ease-linear">
            <CiLocationOn size={22} className="text-[#0D9084]" />
            <p className="text-[15px] ml-2">Addis Ababa, ET</p>
          </div>
          <div className="flex items-center space-x-2">
            <FiClock size={20} className="text-[#0D9084]" />
            <p>Office: Mon-Fri 9am - 5pm | 24/7 Services</p>
          </div>
          <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] transition duration-300 ease-linear">
            <BiPhone size={22} className="text-[#0D9084]" />
            <p className="text-[15px] ml-2">+251 940 208 468</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-[#7782815a] py-1 px-1 rounded text-center cursor-pointer hover:scale-105 duration-150 ease-linear">
              <BiLogoFacebook
                size={20}
                className=" transition duration-150 ease-linear hover:text-[#0D9084] "
              />
            </span>
            <span className="bg-[#7782815a] py-1 px-1 rounded text-center cursor-pointer hover:scale-105 duration-150 ease-linear">
              <FaXTwitter
                size={19}
                className=" transition duration-150 ease-linear hover:text-[#0D9084] "
              />
            </span>
            <span className="bg-[#7782815a] py-1 px-1 rounded text-center cursor-pointer hover:scale-105 duration-150 ease-linear">
              <FaInstagram
                size={20}
                className="  transition duration-150 ease-linear hover:text-[#0D9084] "
              />
            </span>
            <span className="bg-[#7782815a] py-1 px-1 rounded text-center hover:scale-105 duration-150 ease-linear">
              <BiLogoLinkedinSquare
                size={20}
                className="text-center cursor-pointer   transition duration-150 ease-linear hover:text-[#0D9084] "
              />
            </span>
          </div>
        </div>
      </div>
      {/* {isSticky && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )} */}
      <nav
        //
        // className={`flex items-center justify-between md:space-x-3  py-8 px-6 ${
        //   isSticky ? "sticky top-0 bg-[#0a0719] z-20 w-full" : ""
        // }`}
        className={`left-0 w-full flex items-center justify-between transition duration-600 md:px-[70px] lg:px-[120px] py-9 z-10 ${
          isSticky
            ? "fixed bg-[#0b2f2e] top-0 mt-0 py-5 backdrop-filter backdrop-blur-md"
            : ""
        }`}
      >
        <div className="cursor-pointer hover:scale-110 py-2 px-6 transition duration-300 flex items-center gap-3">
          <Image
            src="./images/logo.svg"
            alt="logo"
            width={40}
            height={25}
            className="w-full h-8"
          />
          <div className="flex flex-col mr-2 text-[#0D9084]">
            <h3 className="font-semibold text-base">Agency</h3>
            <p className="font-light text-sm">Creative</p>
          </div>
        </div>
        <ul className="flex items-center text-base md:space-x-10">
          <li>
            <Link href="#home" className="navLink active">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="navLink">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="navLink">
              Services
            </Link>
          </li>
          <li>
            <Link href="#clients" className="navLink">
              Our Clients
            </Link>
          </li>
        </ul>
        <div className="cursor-pointer border font-light text-[#0D9084] border-[#0d908590] py-2 px-3 flex items-center hover:scale-110 transition duration-300">
          <AiOutlineMail
            size={30}
            className="font-light text-sm"
            style={{ strokeWidth: 1 }}
          />
          <span className="ml-3 uppercase">Get in touch</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
