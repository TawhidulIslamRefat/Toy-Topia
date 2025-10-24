import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const ProductCard = ({ product }) => {
  const {
    productId,
    productName,
    price,
    rating,
    pictureURL,
    availableQuantity,
  } = product;

  return (
    <div>
      <div
        className="card shadow-sm h-full flex flex-col transition-transform duration-500 hover:scale-102 hover:bg-red-100"
        data-aos="fade-down-top"
        data-aos-duration="1000"
      >
        <figure className="p-5">
          <img
            className="w-30 h-30 lg:w-80 lg:h-80 bg-[#D9D9D9] rounded-xl"
            src={pictureURL}
            alt="Product"
          />
        </figure>
        <div className=" p-3 md:p-5 flex flex-col grow justify-between">
          <h2 className="text-[13px] lg:text-2xl font-normal lg:font-semibold ">
            {productName}
          </h2>
          <div className="flex justify-between items-center gap-2 lg:gap-25 my-3">
            <p className="flex items-center text-[10px] lg:text-[18px] font-medium gap-1 bg-orange-200 rounded-xl p-1">
              <span className="text-[10px] lg:text-xl text-orange-500">
                <FaStar />
              </span>{" "}
              {rating}
            </p>
            <p className="text-[10px] lg:text-[18px] font-medium bg-base-300 p-1  rounded-xl">
              <span className="text-red-400">Available -</span>{" "}
              {availableQuantity}
            </p>
          </div>
          <p className="text-[11px] lg:text-xl font-medium mb-0 lg:mb-2">
            Price - $ {price}
          </p>
          <div className="card-actions">
            <Link
              to={`/product-details/${productId}`}
              className=" btn mt-1.5 bg-linear-to-r  from-[#FA6775]  to-[#F52549] w-[90%] mx-auto lg:w-full py-0 lg:py-2.5 text-[10px] lg:text-[16px] font-medium text-white rounded-lg"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
