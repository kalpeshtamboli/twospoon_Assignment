import React from "react";
import logo from "./assets/Logo.svg";
import facebook from "./assets/Facebook.png";
import twitter from "./assets/Twitter.png";
import tiktok from "./assets/Tiktok.png";
import instagram from "./assets/Instagram.png";

const Footer = ({ footerServices, assitantToTheBuyer }) => {
  return (
    <footer className="bg-[#181313] md:bg-black pb-6">
      <div className=" text-white flex flex-col lg:flex-row justify-center   lg:justify-evenly py-14  md:py-20 font-inter">
        <div>
          <img
            src={logo}
            alt="logo"
            className="invert mx-auto md:mx-auto  lg:mx-5"
            loading="lazy"
          />
          <p className="text-sm md:text-md px-7 md:px-52 lg:px-5 lg:w-[24rem] text-[#CFCFCF] mt-7 text-center md:text-center lg:text-left">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className="flex flex-col space-y-5 mt-10 md:mt-10 lg:mt-0 text-center lg:text-left">
          <p className="text-lg font-semibold">Services</p>
          <ul className="flex flex-col space-y-3 text-[#CFCFCF]">
            {footerServices?.map((services) => (
              <li className="text-sm md:text-md">{services}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-5 mt-10 md:mt-10 lg:mt-0 text-center lg:text-left">
          <p className=" text-lg font-semibold">Assitance to the buyer</p>
          <ul className="flex flex-col space-y-3 text-[#CFCFCF]">
            {assitantToTheBuyer?.map((rules) => (
              <li className="text-sm md:text-md">{rules}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-center lg:justify-start lg:mx-52 space-x-4">
        <img src={twitter} alt="" className="h-4 w-4" />
        <img src={facebook} alt="" className="h-4 w-4" />
        <img src={tiktok} alt="" className="h-4 w-4" />
        <img src={instagram} alt="" className="h-4 w-4" />
      </div>
    </footer>
  );
};

export default Footer;
