import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <TailSpin color="#4ade80" height={80} width={80} />
    </div>
  );
};

export default Loading;
