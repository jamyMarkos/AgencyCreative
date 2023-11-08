import React, { useEffect, useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <button
          className="fixed bottom-12 right-12 h-[50px] z-20"
          onClick={scrollUp}
        >
          <BsArrowUpSquareFill
            size={30}
            className={`font-extrabold w-[35px] h-[35px] hover:bg-slate-400 transition duration-150 ease-linear  ${
              backToTop
                ? "opacity-100"
                : "opacity-0 transition duration-600 ease-linear"
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
