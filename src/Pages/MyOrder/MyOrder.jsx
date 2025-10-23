import React, { use } from "react";
import { OrderContext } from "../../Provider/OrderProvider/OrderProvider";
import { FaStar } from "react-icons/fa";

const MyOrder = () => {
   
    const {order} = use(OrderContext);

  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className="text-4xl font-bold text-center mb-10">My Orders</h2>

      {order.length === 0 ? (
        <p className="text-center text-gray-500 text-xl mt-10">
          You have no orders yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {order.map((product, index) => (
            <div key={index} className="card bg-base-100 shadow-lg rounded-xl">
              <figure className="px-5 pt-5">
                <img src={product.pictureURL} alt={product.productName} className="rounded-xl w-full h-48 object-cover" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xl font-semibold">{product.productName}</h2>
                <p className="text-gray-500">Category: {product.subCategory}</p>
                <p className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-lg">
                  <FaStar /> {product.rating}
                </p>
                <p className="text-xl font-semibold mt-2">Price: ${product.price}</p>
                <p className=" font-semibold mt-2 text-yellow-300">Status Processing</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
