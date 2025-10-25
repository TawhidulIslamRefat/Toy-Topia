import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

const BestBrand = () => {
  return (
    <div className="my-10">
      <h1 className="text-xl md:text-3xl font-bold text-center">Popular Brands</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        <div
          className="card bg-base-300 shadow-sm py-6 lg:py-5 mt-8"
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
          className="card bg-base-300 shadow-sm py-5 mt-8 "
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
          </div>
        </div>
        <div
          className="card bg-base-300 shadow-sm py-5 mt-8 "
          data-aos="fade-down"
        >
          <figure>
            <img
              className="w-25 md:w-35 lg:w-60"
              src="https://download.logo.wine/logo/Bandai_Namco_Entertainment/Bandai_Namco_Entertainment-Logo.wine.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              Bandai Namco
            </h2>
          </div>
        </div>
        <div
          className="card bg-base-300 shadow-sm py-5 mt-8 "
          data-aos="fade-down"
        >
          <figure>
            <img
              className="w-18 md:w-35 lg:w-50"
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Spin_Master_logo.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              Spin Master
            </h2>
          </div>
        </div>
        <div
          className="card bg-base-300 shadow-sm py-5 mt-8 "
          data-aos="fade-down"
        >
          <figure>
            <img
              className="w-17 md:w-24 lg:w-40"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hasbro_logo.svg/1873px-Hasbro_logo.svg.png"
              alt="Apple Logo"
            />
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-[10px] sm:text-xl font-medium">
              Hasbro
            </h2>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default BestBrand;
