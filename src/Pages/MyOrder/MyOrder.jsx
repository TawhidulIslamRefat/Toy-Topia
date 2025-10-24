import React, { use } from "react";
import { OrderContext } from "../../Provider/OrderProvider/OrderProvider";
import { FaStar } from "react-icons/fa";

const MyOrder = () => {
  const { order } = use(OrderContext);

  return (
    <div>
      <title> ToyTopia - My-Order</title>
      <div className="w-[90%] lg:w-10/12 mx-auto my-10">
        <h2 className="text-4xl font-bold text-center mb-10">My Orders</h2>

        {order.length === 0 ? (
          <p className="text-center text-gray-500 text-xl mt-10">
            You have no orders yet.
          </p>
        ) : (
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
        )}
      </div>
      <div className="w-10/12 mx-auto my-10">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
          Notifications
        </h2>
        <ul className="space-y-4 my-4 border-yellow-500 bg-yellow-50 ">
          <li className="p-4 rounded-lg shadow-md border-l-4">
            <p className="font-medium">
              Your order ORD-1010 has been Processing!
            </p>
            <p className="text-gray-500 text-sm">2025-10-20</p>
          </li>
        </ul>
        <ul className="space-y-4  border-blue-500 bg-blue-50 ">
          <li className="p-4 rounded-lg shadow-md border-l-4">
            <p className="font-medium">
              New Fisher-Price Learning Tablet - 10% OFF!
            </p>
            <p className="text-gray-500 text-sm">2025-10-10</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyOrder;
