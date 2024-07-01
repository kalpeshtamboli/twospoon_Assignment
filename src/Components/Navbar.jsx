import React from "react";
import logo from "../assets/Logo.svg";
import User from "../assets/User.png";
import Favorites from "../assets/Favorites.png";
import Cart from "../assets/Cart.png";
import InputBox from "./Textbox/InputBox";
const Navbar = ({ navList }) => {
  return (
    <div>
    <div className=" hidden lg:flex ml-28 my-3 items-center    justify-around  font-inter">
      <div className="flex gap-x-10 items-center">
        <img src={logo} alt="logo" loading="lazy" />
        <div className="relative -top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 relative top-9 left-2 text-gray-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <InputBox
            classes=" pl-10 pr-16 outline-none py-3 bg-gray-100 rounded-lg"
            placeHolder={"Search"}
            type={"text"}
          />
        </div>
      </div>
      <ul className="flex items-center gap-x-10">
        {navList?.map((listItem) => {
          return (
            <li
              className={` ${
                listItem === "Home" ? "text-black" : "text-[#B5B5B5]"
              }`}
            >
              {listItem}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-x-8">
        <img className="w-7 h-7" src={Favorites} alt="Favorites" />
        <img className="w-5 h-5" src={Cart} alt="Cart" />
        <img className="w-5 h-5" src={User} alt="User" />
      </div>

    </div>
    <hr class="bg-gray-200 h-[1.5px] w-full " />

    </div>
  );
};

export default Navbar;
