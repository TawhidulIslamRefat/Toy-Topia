import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const TopRating = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("/top-rating.json")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => toast("Error loading data:", error));
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center mb-10">Top Rated Toy</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={product.productId}
            className={`relative p-4 bg-white shadow-md rounded-2xl border transition-transform duration-300 hover:scale-105 ${
              index === 0 ? "border-pink-500 shadow-pink-200 scale-105" : ""
            }`}
          >
            {index === 0 && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-[10px] lg:text-xs font-semibold px-1 lg:px-3 py-1 rounded-full shadow">
                🔥 Top Rated
              </span>
            )}
            <img
              src={product.pictureURL}
              alt={product.productName}
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="text-base font-semibold text-center mb-1">
              {product.productName}
            </h3>
            <p className="text-center text-sm text-gray-600 mb-2">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center justify-center text-yellow-500">
              <FaStar className="mr-1" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRating;
