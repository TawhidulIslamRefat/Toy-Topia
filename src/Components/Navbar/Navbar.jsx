import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
const Navbar = () => {
  const {user,logOut} = use(AuthContext);
  const links = (
    <>
      <li className="text-[16px] font-medium">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className= "text-[16px] font-medium">
        <NavLink to='/my-profile'>My Profile</NavLink>
      </li>
      <li className= "text-[16px] font-medium">
        <NavLink to='/auth/register'>Register</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
    .then(()=>{
      alert("You Logged Out SuccessFully ")
    })
    .catch( error => {
      alert(error.message);
    })
  }
  return (
    <div className="bg-base-100 shadow-xl">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <Link className=" text-xl font-semibold text-green-600">Sellify - <span className="text-[16px] text-black">A Tech Store Platform</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              className="text-[16px] font-medium border-2 flex items-center gap-1 py-1 px-2 rounded-3xl hover:bg-base-200"
            >
              LogOut
              <span className="text-white bg-blue-600 p-1.5 rounded-2xl">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-6 h-6 rounded-full"
                />
              </span>
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="text-[16px] font-medium border-2 flex items-center gap-1 py-1 px-2 rounded-3xl hover:bg-base-200"
            >
              Login
              <span className="text-white bg-blue-600 p-1.5 rounded-2xl">
                <FaUserAlt />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
