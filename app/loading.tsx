import React from "react";
// import animation from "./lottie/Loading.json";
// import Lottie from "react-lottie";
const Loading = () => {
  const options = {
    loop: true,
    autoplay: true,
    // animationData: animation,
  };
  // return <Lottie options={options} width={200} height={200} />;
  return (
    <div className="flex items-center justify-center place-items-center">
      <div>Loading</div>
    </div>
  );
};

export default Loading;
