import React from "react";
import { NavLink, } from "react-router-dom";
import Logo from "../../assets/Resources/Logo.png";
// import { AiOutlineMenu } from 'react-icons/ai';

const MainLayout = () => {
  const Link = (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-rose-500 underline" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-rose-500 underline" : ""
        }
        to="/donation"
      >
        Donation
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-rose-500 underline" : ""
        }
        to="/statistics"
      >
        Statistics
      </NavLink>
    </>
  );
  return (
    <div className="w-full py-12 relative z-30 px-2 ">
      <div className="flex flex-col items-center  md:flex-row lg:flex-row justify-between w-9/12 mx-auto">
        <NavLink to='/'> <img className="md:w-44 lg:w-44" src={Logo} alt="" /></NavLink>

        <div className="flex mt-8 md:mt-0 lg:mt-0  border md:border-none lg:border-none rounded-full border-rose-100 md:px-0 px-3 lg:px-0 p-2 gap-6 font-bold">
          {Link}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
