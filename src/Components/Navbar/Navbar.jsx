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
    <div className="bg-base-100 shadow-xl">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <a href="/" className=" text-xl font-semibold text-green-800">
            Sellify -{" "}
            <span className="text-[16px] text-black">
              A Tech Store Platform
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3 ">
          <div className="w-12 h-12 rounded-full border-2 border-green-300 cursor-pointer  ">
            {user && user.photoURL ? (
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <Link to="/my-profile">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-green-300 cursor-pointer"
                  />
                </Link>
              </div>
            ) : (
              <div className="tooltip tooltip-right" data-tip="No User">
                <FaUserAlt
                  size={24}
                  className="w-12 h-12 rounded-full border-2 border-green-300"
                />
              </div>
            )}
            ;
          </div>

          <div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white overflow-hidden bg-green-600 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative">Logout</span>
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white overflow-hidden bg-green-600 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
