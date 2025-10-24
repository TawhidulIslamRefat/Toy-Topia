import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

const BestBrand = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">Popular Brands</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        <div
          className="card bg-base-300 shadow-sm py-6 lg:py-5 mt-8 transition-transform duration-500 hover:scale-105"
          data-aos="fade-up"
        >
          <figure>
            <img
              className="w-30 md:w-45 lg:w-70"
              src="https://logos-world.net/wp-content/uploads/2020/09/LEGO-Logo.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              LEGO
            </h2>
          </div>
        </div>

        <div
          className="card bg-base-300 shadow-sm py-5 mt-8 transition-transform duration-500 hover:scale-105"
          data-aos="fade-down"
        >
          <figure>
            <img
              className="w-17 md:w-24 lg:w-40"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mattel_logo.svg/2042px-Mattel_logo.svg.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              Mattel
            </h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div
          className="card bg-base-300 shadow-sm py-5 mt-8 transition-transform duration-500 hover:scale-105"
          data-aos="fade-top"
        >
          <figure>
            <img
              className="w-20 md:w-26 lg:w-50"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bandai_Namco_Holdings_logo.svg/2560px-Bandai_Namco_Holdings_logo.svg.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              Bandai Namco
            </h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div
          className="card bg-base-300 shadow-sm py-5 mt-8 transition-transform duration-500 hover:scale-105"
          data-aos="fade-top"
        >
          <figure>
            <img
              className="w-20 md:w-25 lg:w-40"
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Spin_Master_logo.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              Spin Master
            </h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div
          className="card bg-base-300 shadow-sm py-5 mt-8 transition-transform duration-500 hover:scale-105"
          data-aos="fade-up-top"
        >
          <figure>
            <img
              className="w-full h-full md:w-25 lg:w-70"
              src="https://logos-world.net/wp-content/uploads/2022/07/Hasbro-Logo.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              Hasbro
            </h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBrand;
