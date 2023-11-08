import React from "react";

const Clients = () => {
  return (
    <div className="h-full px-[100px] mt-24 py-6 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-5xl text-[#0D9084] font-semibold">
          Our Clients
        </h2>
        <div className="w-14 h-[1px] bg-[#282525] text-center mt-5" />
        <p className="text-gray-700 capitalize text-xl font-light py-6">
          Whom we work with ?
        </p>
      </div>
      <div className="flex items-center justify-between md:space-x-2 py-6 mt-8">
        <div className="border border-[#003B36] rounded-xl hover:bg-[#353232] py-5">
          <img src="./images/RobustaLogo.png" alt="Robusta" />
        </div>
        <div className="border border-[#003B36] rounded-xl hover:bg-[#353232] py-5 px-5">
          <img src="./images/sysnet.png" alt="Robusta" />
        </div>
        <div className="border border-[#003B36] rounded-xl hover:bg-[#353232] py-5 px-5 h-40">
          <img src="./images/NASH.png" alt="Robusta" className="mt-10" />
        </div>
      </div>

      <div className="py-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-semibold text-center text-[#0D9084]">
            Testimonials
          </h2>
          <div className="w-16 h-[1px] bg-[#282525] text-center mt-5 " />
          <p className="text-gray-700 capitalize text-xl font-light py-6">
            what our clients had to say ?
          </p>
        </div>
        <div className="flex items-center justify-between gap-10 mt-16">
          <div className="w-1/3 h-[250px] bg-[#13072b9d] rounded-xl border border-transparent hover:bg-[#13072b3f] hover:border-[#003B36] cursor-pointer transition duration-400 ease-linear">
            <div className="flex items-center px-12 py-4 mt-3">
              <img
                src="./images/profile.png"
                alt="profile"
                className="mr-8 border border-[#501a1a] rounded-full"
              />
              <div>
                <h3 className="text-xl font-medium">Angel Rose</h3>
                <p className="text-base font-extralight text-neutral-600">
                  Creative Manager
                </p>
              </div>
            </div>
            <p className="text-center text-neutral-600 text-base mt-6 px-7">
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .
            </p>
          </div>
          <div className="w-1/3 h-[250px] bg-[#13072b9d] rounded-xl border border-transparent hover:bg-[#13072b3f] hover:border-[#003B36] cursor-pointer transition duration-400 ease-linear">
            <div className="flex items-center px-12 py-4 mt-3">
              <img
                src="./images/profile.png"
                alt="profile"
                className="mr-8 border border-[#501a1a] rounded-full"
              />
              <div>
                <h3 className="text-xl font-medium ">Angel Rose</h3>
                <p className="text-base font-extralight text-neutral-600">
                  Creative Manager
                </p>
              </div>
            </div>
            <p className="text-center text-neutral-600 text-base mt-6 px-7">
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .
            </p>
          </div>
          <div className="w-1/3 h-[250px] bg-[#13072b9d] rounded-xl border border-transparent hover:bg-[#13072b3f] hover:border-[#003B36] cursor-pointer transition duration-400 ease-linear">
            <div className="flex items-center px-12 py-4 mt-3">
              <img
                src="./images/profile.png"
                alt="profile"
                className="mr-8 border border-[#501a1a] rounded-full"
              />
              <div>
                <h3 className="text-xl font-medium ">Angel Rose</h3>
                <p className="text-base font-extralight text-neutral-600">
                  Creative Manager
                </p>
              </div>
            </div>
            <p className="text-center text-neutral-600 text-base mt-6 px-7">
              There are many variations passages of Lorem Ipsum majority some by
              words which don't look .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
