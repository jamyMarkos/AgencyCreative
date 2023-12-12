import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "../UI/Cards";

// import { MdArrowBackIosNew } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";

const ServiceCarousel = () => {
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
    <Carousel responsive={responsive}>
      <Cards>
        <div className="flex flex-col py-7 px-7 rounded-full bg-[#E2E2E2]">
          <img src="./images/monitor.svg" alt="Social Media Management" />
        </div>
        <h4 className="text-center py-3 mt-4">Social Media Management</h4>
      </Cards>
      <Cards>
        <div className="flex flex-col py-7 px-7 rounded-full bg-[#FF4646]">
          <img src="./images/search-engine.svg" alt="Social Media Management" />
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
    </Carousel>
  );
};

export default ServiceCarousel;
