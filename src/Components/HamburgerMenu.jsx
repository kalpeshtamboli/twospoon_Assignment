import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";
import User from "../assets/User.png";
import Favorites from "../assets/Favorites.png";
import Cart from "../assets/Cart.png";
const HamburgerMenu = ({ navList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:hidden flex z-10 relative justify-between items-center mx-20 mt-3">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
          aria-label="Toggle menu"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          ></svg> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-100 z-20">
          <div className="flex justify-end  p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex flex-col gap-5 text-sm mt-5">
            {navList.map((item, index) => (
              <li
                key={index}
                className="flex justify-start pl-5 gap-5 font-semibold tracking-wide"
              >
                <span
                  className={` ${
                    item === "HOME" ? "text-[#14279b]" : "text-black"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
            <li>
              <img className="ml-5  " src={User} alt="" />
            </li>
            <li>
              <img className="ml-3  " src={Favorites} alt="" />
            </li>
            <li>
              <img className="ml-3  " src={Cart} alt="" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
