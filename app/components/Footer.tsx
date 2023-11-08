"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaInstagram, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook, BiLogoLinkedinSquare, BiPhone } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[60vh] w-full bg-[#535050]">
      <div className="grid grid-cols-3 gap-2 px-[160px] py-20">
        <div className="col-span-1">
          <div className="cursor-pointer py-8 px-6 flex flex-col items-start gap-3">
            <div className="flex items-center space-x-2 justify-start mb-6">
              <img src="./images/logo.svg" alt="logo" className="h-8" />
              <h3 className="font-semibold text-xl mr-2 text-[#0D9084] cursor-pointer">
                Agency Creative
              </h3>
            </div>
            {/* <p className="font-light text-sm">Creative</p> */}

            <p className="text-white text-left mb-8">
              Elevating your brand in the digital era is our expertise. Through
              compelling online experiences, strategic digital marketing
              campaigns, and cutting-edge technologies, We position your brand
              at the forefront of your industry.
            </p>
            <button className="uppercase bg-[#13433f] font-bold py-4 cursor-pointer  px-10 rounded-xl text-white hover:bg-[#0D9084] transition duration-300 ease-linear hover:scale-105">
              Reach out to us
            </button>
          </div>
        </div>
        <div className="col-span-1 text-white">
          <div className="py-8 px-6 flex flex-col items-start gap-3">
            <h2 className="uppercase text-[#0D9084] font-bold text-base text-center cursor-pointer">
              Quick Links
            </h2>
            <div className="flex items-start py-8 justify-between gap-x-4">
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] footer-link">
                  <MdOutlineKeyboardArrowRight className="arrow" size={22} />
                  <p className="text-[15px] ml-2">Home</p>
                </div>
                <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] footer-link">
                  <MdOutlineKeyboardArrowRight className="arrow" size={22} />
                  <p className="text-[15px] ml-2">Services</p>
                </div>
                <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] footer-link">
                  <MdOutlineKeyboardArrowRight className="arrow" size={22} />
                  <p className="text-[15px] ml-2">About</p>
                </div>
                <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] footer-link">
                  <MdOutlineKeyboardArrowRight className="arrow" size={22} />
                  <p className="text-[15px] ml-2">24/7 Help Desk</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] footer-link">
                  <MdOutlineKeyboardArrowRight className="arrow" size={22} />
                  <p className="text-[15px] ml-2">Clients</p>
                </div>
                <div className="flex items-center inset-y-0 cursor-pointer  hover:text-[#0D9084] footer-link">
                  <MdOutlineKeyboardArrowRight className="arrow" size={22} />
                  <p className="text-[15px] ml-2">Contacts</p>
                </div>
                <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] footer-link">
                  <MdOutlineKeyboardArrowRight className="arrow" size={22} />
                  <p className="text-[15px] ml-2">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 text-white">
          <div className="py-8 px-6 flex flex-col items-start gap-3">
            <h2 className="uppercase text-[#0D9084] font-bold text-base text-center">
              Contact Us
            </h2>
            <div className="flex flex-col py-8 gap-y-6">
              <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] transition duration-300 ease-linear">
                <BiPhone size={22} className="text-[#0D9084]" />
                <p className="text-[15px] ml-2">+251 940 208 468</p>
              </div>
              <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] transition duration-300 ease-linear">
                <AiOutlineMail size={22} className="text-[#0D9084]" />
                <p className="text-[15px] ml-2">
                  emnetdigitalsolutions@gmail.com
                </p>
              </div>
              <div className="flex items-center inset-y-0 cursor-pointer hover:text-[#0D9084] transition duration-300 ease-linear">
                <CiLocationOn size={22} className="text-[#0D9084]" />
                <p className="text-[15px] ml-2">Addis Ababa, ET</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[120px]">
        <div className="border-t border-[#0D9084] text-white  flex items-center justify-between py-4 px-6">
          <div className="space-x-16">
            <span className="px-4 cursor-pointer ">
              2023 &copy;{" "}
              <Link
                href="#"
                className="hover:text-[#0D9084] transition duration-300 ease-linear ml-1"
              >
                AgencyCreative
              </Link>
            </span>
            <span className="cursor-pointer hover:text-[#0D9084] hover:underline transition duration-300 ease-linear">
              Terms and Conditions
            </span>
            <span className="cursor-pointer hover:text-[#0D9084] hover:underline transition duration-300 ease-linear">
              Privacy Policy
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="italic font-semibold text-[15px]">Follow Us :</p>
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
    </div>
  );
};

export default Footer;
