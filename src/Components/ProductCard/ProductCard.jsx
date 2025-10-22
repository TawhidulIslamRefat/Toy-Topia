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
      <div className="card shadow-sm h-full">
        <figure className="p-5">
          <img className="w-80 h-80 bg-[#D9D9D9] rounded-xl"
            src={pictureURL}
            alt="Product"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold ">{productName}</h2>
          <div className="flex justify-between items-center gap-25 my-3">
            <p className="flex items-center text-[18px] font-medium gap-1 bg-orange-200 rounded-xl p-1">
            <span className="text-xl text-orange-500"><FaStar /></span> {rating}
          </p>
          <p className="text-[18px] font-medium bg-base-300 p-1  rounded-xl">
           <span className="text-red-400">Available -</span> {availableQuantity}
          </p>
          </div>
          <p className="text-xl font-medium mb-2">
            Price - $ {price}
          </p>
          <div className="card-actions">
            <Link to={`/product-details/${productId}`} className="btn bg-gradient-to-r from-green-600 to-teal-700 w-full py-2.5 text-[16px] font-medium text-white rounded-[8px]">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
