"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { Nunito } from "next/font/google";
import Cards from "./components/UI/Cards";
import Services from "./components/Services";
import Clients from "./components/Clients";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main className="!scroll-smooth">
      <div className="px-[120px]">
        <div className="grid grid-cols-4 items-center py-12">
          <div className="col-span-2 items-center w-full h-screen px-20 py-[75px]">
            <h1
              className={`pt-24 font-bold text-6xl text-left text-[#0D9084]  ${nunito.className}`}
            >
              Elevating your brand in the digital era
            </h1>
            <p className="text-left text-neutral-600 text-base py-3 pt-10 leading-6">
              Elevating your brand in the digital era is our expertise. Through
              compelling online experiences, strategic digital marketing
              campaigns, and cutting-edge technologies, We position your brand
              at the forefront of your industry.
            </p>
            <button
              className={`bg-[#0D9084] text-black rounded-lg py-3 px-4 shadow flex items-center gap-4 mt-16 btn ${
                isHovered ? "hovered" : ""
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Start Project
              <BsArrowRight className="arr text-black" size={25} />
            </button>
          </div>
          <div className="col-span-2 -mt-40 px-20">
            <img
              src="./images/hero.svg"
              alt="hero"
              className="hero-illustration w-[450px] h-[65vh]"
            />
          </div>
        </div>
        <Services />
        <Clients />
        <ScrollToTop />
      </div>

      <ContactForm />
    </main>
  );
}
