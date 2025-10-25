import React from "react";
import Error from "../../assets/undraw_page-not-found_6wni (1).svg";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <div className=" flex justify-center items-center mt-25  ">
        <img className="fill-[#FA6775]" src={Error} alt="" />
      </div>
      <h1 className="text-2xl font-medium text-center mt-6 text-[#020203]">
        Page Not Found
      </h1>

      <div className="flex justify-center items-center mt-10">
        <Link
          to="/"
          className="text-xl font-medium text-white bg-linear-to-r from-[#FA6775]  to-[#F52549] px-6 py-2 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
