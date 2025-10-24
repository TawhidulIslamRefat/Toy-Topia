import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import ProductDetailsCard from "../../Components/ProductDetailsCard/ProductDetailsCard";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productDetails = data.find((p) => String(p.productId) === id);
    setProduct(productDetails);
  }, [data, id]);
  return (
    <div className="flex flex-col ">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <ProductDetailsCard product={product}></ProductDetailsCard>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ProductDetails;
