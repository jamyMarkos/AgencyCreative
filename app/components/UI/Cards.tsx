import React from "react";

const Cards = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="rounded-xl w-[90%] h-[280px] flex flex-col items-center border-[0.5px] border-orange-500 py-5 px-2 transition duration-150 ease-in-out hover:bg-[#2c2a2a69]">
        {children}
      </div>
    </main>
  );
};

export default Cards;
