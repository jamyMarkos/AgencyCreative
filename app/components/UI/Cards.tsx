import React from "react";

const Cards = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-xl w-full h-[350px] flex flex-col items-center border-[0.5px] border-[#cccccc9a] py-5 px-2 hover:scale-110 transition duration-150 ease-in-out hover:bg-[#2c2a2a69]">
      {children}
    </div>
  );
};

export default Cards;
