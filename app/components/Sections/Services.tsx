import React from "react";
import Cards from "../UI/Cards";
import ServiceCarousel from "../Slider/ServiceCarousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomArrow from "../UI/CustomArrow";

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      </div>
      <Carousel
        responsive={responsive}
        // showDots={true}
        className="mt-10"
      >
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#E2E2E2]">
            <img src="./images/monitor.svg" alt="Social Media Management" />
          </div>
          <h4 className="text-center text-base py-3 mt-4 text-orange-500">
            Social Media Management
          </h4>
          <p className="text-[13px] text-center font-extralight text-gray-500">
            Let us manage your social media presence, from strategy and content
            creation to community management and analytics. Build meaningful
            connections and reach your target audience.
          </p>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#FF4646]">
            <img
              src="./images/search-engine.svg"
              alt="Social Media Management"
            />
          </div>
          <h4 className="text-center py-3 mt-4 text-base text-orange-500">
            Search Engine Optimization
          </h4>
          <p className="text-[13px] text-center font-extralight text-gray-500">
            Increase your website's visibility and organic traffic with our
            expert SEO services. We'll optimize your site for relevant keywords
            and attract qualified leads.
          </p>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#FFB219]">
            <img
              src="./images/ux-design.svg"
              className="w-[32px] h-[32px] text-black"
              alt="Social Media Management"
            />
          </div>
          <h4 className="text-center py-3 mt-4 text-base text-orange-500">
            Web Design, UI/UX Technical Support
          </h4>
          <p className="text-[13px] text-center font-extralight text-gray-500">
            We create custom websites with stunning UI/UX design, optimized
            performance, and reliable support. Get a website that converts and
            grows with your business.
          </p>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#8EEA77]">
            <img
              src="./images/pen-tool.svg"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4 text-base text-orange-500">
            Graphics Design
          </h4>
          <p className="text-[13px] text-center font-extralight text-gray-500">
            From logos and brochures to social media graphics and website
            visuals, we create stunning designs that communicate your brand
            message effectively.
          </p>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#FFB219]">
            <img
              src="./images/brand.png"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4 text-base text-orange-500">
            Branding
          </h4>
          <p className="text-[13px] text-center font-extralight text-gray-500">
            Attract, engage, and convert customers with our expertise in SEO,
            social media management, content marketing, and more. We'll drive
            traffic, leads, and sales for your brand.
          </p>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#8EEA77]">
            <img
              src="./images/ads.png"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4 text-base text-orange-500">
            Ads
          </h4>
          <p className="text-[13px] text-center font-extralight text-gray-500">
            Build a strong foundation for your business with a unique brand
            identity, messaging, and visual guidelines. We specialize in
            rebranding, logo design, and brand strategy.
          </p>
        </Cards>
        <Cards>
          <div className="flex flex-col py-7 px-7 rounded-full bg-[#E2E2E2]">
            <img
              src="./images/3d.png"
              alt="Social Media Management"
              className="w-[32px] h-[32px] text-black"
            />
          </div>
          <h4 className="text-center py-3 mt-4 text-base text-orange-500">
            2D/3D Animation Motion Graphics
          </h4>
          <p className="text-[13px] text-center font-extralight text-gray-500">
            Bring your brand to life through captivating 2D/3D motion graphics
            and animated ads. We tell your story in a way that resonates and
            inspires action.
          </p>
        </Cards>
        {/* <CustomArrow direction="left" onClick={() => Carousel.previous()} />
        <CustomArrow direction="right" onClick={() => Carousel.next()} /> */}
      </Carousel>
    </div>
  );
};

export default Services;
