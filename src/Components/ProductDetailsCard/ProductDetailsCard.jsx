import { use } from "react";
import { FaStar } from "react-icons/fa";
import { OrderContext } from "../../Provider/OrderProvider/OrderProvider";
import { toast, ToastContainer } from "react-toastify";

const ProductDetailsCard = ({ product }) => {
  const { addOrder } = use(OrderContext);

  const {
    productName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = product;

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(product);
    toast.success("Your Request is Successfully Progress");
    e.target.reset();
  };

  return (
    <div className=" w-[97%] md:w-full lg:w-10/12 mx-auto my-10 p-6 bg-[#FAF6E9] items-center shadow-xl rounded-xl flex flex-col lg:flex-row gap-8">
      <title>{subCategory}</title>
      <ToastContainer></ToastContainer>
      <div className="">
        <img
          src={pictureURL}
          alt={productName}
          className="w-full lg:w-96 h-50 md:h-96  rounded-xl"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-6">
        <div>
          <h1 className="text-xl md:text-3xl font-bold mb-2">{productName}</h1>
          <p className="text-[14px] text-gray-500 mb-4">
            Category: {subCategory}
          </p>

          <div className="flex items-center gap-4 mb-4">
            <p className="flex items-center gap-1 bg-orange-100 text-orange-600 px-1.5 py-0.5 md:px-3 md:py-1 rounded-lg">
              <FaStar /> {rating}
            </p>
            <p className="bg-gray-100 text-gray-700 px-1.5 py-0.5 md:px-3 md:py-1 rounded-lg">
              Available: {availableQuantity}
            </p>
          </div>

          <p className=" text-[16px] md:text-xl font-semibold mb-4">
            Price: ${price}
          </p>

          <div className="mb-4">
            <h2 className="text-[14px] md:text-lg font-medium mb-1">
              Seller Info:
            </h2>
            <p>{sellerName}</p>
            <p className="text-gray-500 text-[14px]">{sellerEmail}</p>
          </div>

          <div>
            <h2 className="text-[16px] md:text-lg font-medium mb-1">
              Description:
            </h2>
            <p className="text-gray-700 text-[14px]">{description}</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Try Now</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <button
              type="submit"
              className="btn text-white bg-linear-to-r from-[#FA6775]  to-[#F52549] mt-2"
            >
              Try Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
