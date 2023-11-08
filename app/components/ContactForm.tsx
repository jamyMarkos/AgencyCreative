import React from "react";

const ContactForm = () => {
  return (
    <div className="h-[100vh]  bg-gradient-to-r from-[#0d0916ea] to-[#49288d5e] py-12">
      <div className="px-[120px]">
        <div className="flex flex-col items-center justify-center py-16 space-y-2 backdrop-filter backdrop-blur-sm">
          <p className="font-bold text-lg text-[#0D9084]">Leave Us a Message</p>
          <h2 className="font-extrabold text-5xl ">Contact Us</h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="border border-[#123431] py-12 col-span-1 bg-[#3d35357f] rounded-xl h-[60vh] mb-4"></div>
          <form
            action=""
            className="col-span-1 py-4 px-6 gap-2 border border-[#123431] rounded-xl h-[60vh] text-black"
          >
            <div className="flex items-center gap-3 px-4 py-8">
              <input
                type="text"
                placeholder="Your Name (*)"
                className="py-2 px-3 w-1/2 outline-none border border-transparent focus:border-[#0D9084] transition duration-300 ease-linear cursor-pointer"
              />
              <input
                type="text"
                placeholder="Your Email (*)"
                className="py-2 px-3 w-1/2 outline-none border border-transparent focus:border-[#0D9084] transition duration-300 ease-linear cursor-pointer"
              />
            </div>
            <div className="px-4 py-4">
              <input
                type="text"
                placeholder="Subject (*)"
                className="py-2 px-3 w-full outline-none border border-transparent focus:border-[#0D9084] transition duration-300 ease-linear cursor-pointer"
              />
            </div>
            <div className="px-4 py-4">
              <textarea
                name="message"
                id=""
                placeholder="Message(*)"
                className="w-full h-40 py-2 px-3 outline-none border border-transparent focus:border-[#0D9084] transition duration-300 ease-linear cursor-pointer"
              ></textarea>
            </div>

            <div className="px-4 py-4 flex items-center justify-center">
              <button
                className="inline rounded border border-transparent focus:boder-[#0D9084] bg-[#0D9084] py-2 px-3 mr-2 hover:bg-[#0d9085b2] hover:scale-110 transition duration-300 ease-linear"
                type="submit"
              >
                Send Message
              </button>
              <span className="text-red-700">* Required</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
