import React from "react";
import { PulseLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-15 sm:gap-25 ">
          <PulseLoader color="#F52549" size={40} />
        </div>
  );
};

export default Loading;
