import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../../assets/20210307173605-2c9d1cfeab75933790b70f271b2d50c9.png'
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start flex items-center">
            <img className="w-35" src={logo} alt="" />
          <Link className=" text-xl font-semibold"> - <span className="text-[16px]">A Tech Store Platform</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
