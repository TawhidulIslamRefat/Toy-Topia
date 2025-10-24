import React from "react";

import { useLoaderData } from "react-router";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import BestBrand from "../../Components/BestBrand/BestBrand";
import ProductCard from "../../Components/ProductCard/ProductCard";
import TopRating from "../../Components/TopRating/TopRating";

const Home = () => {
  const productData = useLoaderData();
  return (
    <div>
      <title>ToyTopia - Home</title>
      <section className="w-[98%] lg:w-10/12 mx-auto mt-10">
        <HomeSlider product={productData}></HomeSlider>
      </section>
      <section className="w-11/12 mx-auto">
        <BestBrand></BestBrand>
      </section>
      <section className="w-11/12 mx-auto mt-10 mb-10">
        <TopRating></TopRating>
      </section>
      <section className="w-[95%] lg:w-10/12 mx-auto my-10 md:my-30">
        <h1 className="text-3xl font-semibold text-center">
          Popular Tech Products
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mt-10">
          {productData.map((product) => (
            <ProductCard
              key={product.productId}
              product={product}
            ></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
