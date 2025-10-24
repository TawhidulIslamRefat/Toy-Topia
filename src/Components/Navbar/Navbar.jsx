import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const links = (
    <>
      <li className="text-[16px] font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-[16px] font-medium">
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>

      {user ? (
        <li className="text-[16px] font-medium">
          <NavLink to="/my-order">My Order</NavLink>
        </li>
      ) : (
        <li className="text-[16px] font-medium">
          <NavLink to="/auth/register">Register</NavLink>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfull ");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className=" mb-0 md:mb-15">
      <div className="bg-base-100 shadow-xl sticky md:fixed top-0 left-0 w-full z-50 h-16">
        <div className="navbar w-full lg:w-10/12 mx-auto h-full">
          <div className="navbar-start">
            <a
              href="/"
              className="text-[13px]  md:text-xl font-semibold text-[#F52549]"
            >
              ToyTopia –
              <span className="text-[10px] sm:text-[16px] text-black">
                A Kids Toy Store Platform
              </span>
            </a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 flex items-center gap-6">
              {links}
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-3 ">
            <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full cursor-pointer  ">
              {user && user.photoURL ? (
                <div
                  className="tooltip tooltip-left"
                  data-tip={user?.displayName}
                >
                  <Link to="/my-profile">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-8 sm:w-12 h-8 sm:h-12 rounded-full border-2 border-red-400 cursor-pointer"
                    />
                  </Link>
                </div>
              ) : (
                <div className="w-8 sm:w-12 h-8 sm:h-12">
                  <FaUserAlt className="w-7 sm:w-12 h-7  sm:h-12 " />
                </div>
              )}
            </div>

            <div>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="relative inline-flex items-center justify-center md:px-6 px-4  md:py-3 py-1.5  font-semibold text-white bg-linear-to-r from-[#FA6775]  to-[#F52549] overflow-hidden rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out  rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Logout</span>
                </button>
              ) : (
                <Link
                  to="/auth/login"
                  className="relative inline-flex items-center justify-center md:px-6 px-4  md:py-3 py-1.5 font-semibold text-white overflow-hidden bg-linear-to-r from-[#FA6775]  to-[#F52549]  rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full z-100 md:z-0 bg-base-100 border-t border-gray-300 md:hidden">
        <ul className=" flex justify-center items-center gap-8 py-3">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
