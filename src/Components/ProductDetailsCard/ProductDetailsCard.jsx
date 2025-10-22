import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailsCard = ({ product }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  if (!product) return <p>Loading...</p>;

  const {
    productName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory
  } = product;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill all fields");
      return;
    }
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="w-10/12 mx-auto my-10 p-6 bg-white shadow-lg rounded-xl flex flex-col lg:flex-row gap-8">
      <div className="">
        <img
          src={pictureURL}
          alt={productName}
          className="w-full lg:w-96 h-96  rounded-xl"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{productName}</h1>
          <p className="text-gray-500 mb-4">Category: {subCategory}</p>

          <div className="flex items-center gap-4 mb-4">
            <p className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-lg">
              <FaStar /> {rating}
            </p>
            <p className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
              Available: {availableQuantity}
            </p>
          </div>

          <p className="text-xl font-semibold mb-4">Price: ${price}</p>

          <div className="mb-4">
            <h2 className="text-lg font-medium mb-1">Seller Info:</h2>
            <p>{sellerName}</p>
            <p className="text-gray-500">{sellerEmail}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-1">Description:</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Buy Now</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-primary mt-2">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
