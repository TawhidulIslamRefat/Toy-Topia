import React, { use } from "react";
import { OrderContext } from "../../Provider/OrderProvider/OrderProvider";
import image from '../../assets/undraw_order-delivered_puaw.svg'
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const MyOrder = () => {
  const { order } = use(OrderContext);

  return (
    <div>
      <title> ToyTopia - My-Order</title>
      <div className="w-[90%] lg:w-10/12 mx-auto my-10">
        {order.length === 0 ? (
         <div className="flex justify-center items-center flex-col">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-4">My Orders</h2>
           <p className="text-center text-gray-500 text-[16px] md:text-xl mt-2 mb-4">
            You have no orders yet.
          </p>
          <div>
            <img className="my-15" src={image} alt="" />
          </div>
          <Link to="/" className="btn bg-linear-to-r from-[#FA6775]  to-[#F52549] text-white">
            Go Back Home and order Now
          </Link>
         </div>
        ) : (
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-10">My Orders</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {order.map((product, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg rounded-xl"
              >
                <figure className="px-5 pt-5">
                  <img
                    src={product.pictureURL}
                    alt={product.productName}
                    className="rounded-xl w-full h-50 md:h-78 "
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-[16px] md:text-xl font-semibold">
                    {product.productName}
                  </h2>
                  <p className="text-gray-500 text-[14px]">
                    Category: {product.subCategory}
                  </p>
                  <p className="flex items-center gap-1 bg-orange-100 text-orange-600 px-1.5 py-0.5 md:px-3 md:py-1 rounded-lg">
                    <FaStar /> {product.rating}
                  </p>
                  <p className="text-[16px] md:text-xl font-semibold mt-1 md:mt-2">
                    Price: ${product.price}
                  </p>
                  <p className=" text-[14px] md:text-[16px] font-semibold mt-1 md:mt-2 text-yellow-300">
                    Status Processing
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
