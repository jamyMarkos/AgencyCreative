import React from "react";
import Cards from "./UI/Cards";

const Services = () => {
  //   const cards = [
  //     { img: "monitor.png", bg: "#E2E2E2", title: "Social Media Management" },
  //     { img: "monitor.png", bg: "#FF4646", title: "Search Engine Optimization" },
  //     {
  //       img: "monitor.png",
  //       bg: "#FFB219",
  //       title: "Web Design, UI/UX Technical Support",
  //     },
  //     { img: "monitor.png", bg: "#8EEA77", title: "Graphics Design" },
  //     { img: "monitor.png", bg: "#E2E2E2", title: "Branding" },
  //     { img: "monitor.png", bg: "#8EEA77", title: "Ads" },
  //     {
  //       img: "monitor.png",
  //       bg: "#FFB219",
  //       title: "2D/3D Animation Motion Graphics",
  //     },
  // { img: "monitor.png", bg: "", title: "Social Media Management" },
  //   ];
  return (
    <div className="h-full px-[100px] py-6">
      <div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-5xl text-[#0D9084] font-semibold">
            Our Services
          </h2>
          <div className="w-14 h-[1px] bg-[#282525] text-center mt-5" />
          <p className="text-gray-700 capitalize text-xl font-light py-6">
            What we offer ?
          </p>
        </div>
        <p className="text-center py-12 leading-7 text-base text-neutral-600">
          Our services encompass a range of key areas. In branding, we
          specialize in building brand identities from scratch, rebranding
          established businesses, establishing brand positioning and messaging,
          creating brand strategies, designing logos, and formulating brand
          guidelines for design, style, and tone. With digital marketing, we
          offer expertise in search engine optimization (SEO), social media
          marketing and management, content marketing, email marketing, mobile
          marketing, marketing analytics, and affiliate marketing. Additionally,
          our motion graphics and animated advertising services bring brands to
          life through captivating visuals, dynamic animations, and compelling
          storytelling. Lastly, our website development and technical support
          services provide efficient and cost-effective solutions, including
          website UI/UX design, development support and maintenance, web
          optimization, SEO optimization, networking services, and SaaS
          (Software as a Service).
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#E2E2E2]">
            <img src="./images/monitor.svg" alt="Social Media Management" />
          </div>
          <h4 className="text-center py-3 mt-4">Social Media Management</h4>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#FF4646]">
            <img
              src="./images/search-engine.svg"
              alt="Social Media Management"
            />
          </div>
          <h4 className="text-center py-3 mt-4">Search Engine Optimization</h4>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#FFB219]">
            <img
              src="./images/ux-design.svg"
              className="w-[32px] h-[32px] text-black"
              alt="Social Media Management"
            />
          </div>
          <h4 className="text-center py-3 mt-4">
            Web Design, UI/UX Technical Support
          </h4>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#8EEA77]">
            <img
              src="./images/pen-tool.svg"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4">Graphics Design</h4>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#FFB219]">
            <img
              src="./images/brand.png"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4">Branding</h4>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#8EEA77]">
            <img
              src="./images/ads.png"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4">Ads</h4>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#E2E2E2]">
            <img
              src="./images/3d.png"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4">
            2D/3D Animation Motion Graphics
          </h4>
        </Cards>
      </div>
    </div>
  );
};

export default Services;
