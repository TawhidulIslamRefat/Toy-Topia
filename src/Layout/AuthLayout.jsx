import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { PulseLoader } from "react-spinners";
const AuthLayout = () => {
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
    <div className="flex flex-col">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
