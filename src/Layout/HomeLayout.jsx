import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";
const HomeLayout = () => {
  const [showLoader, setShowLoader] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowLoader(true);
    const timeOut = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [location.pathname]);

  return showLoader ? (
    <div className="flex justify-center items-center min-h-screen gap-15 sm:gap-25 ">
      <PulseLoader color="#F52549" size={40} />
    </div>
  ) : (
    <div className="bg-[#F6F6F4] flex flex-col">
      <ToastContainer position="top-right" autoClose={3000} />
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="flex-1 min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
