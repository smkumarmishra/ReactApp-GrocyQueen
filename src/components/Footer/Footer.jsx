import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-5">
      <div className="max-w-[1400px] mx-auto gap-y-10 px-10 py-5 flex flex-wrap">
        {/* logo is here-- */}
        <div className="font-bold text-[18px]">
          <a href="#">
            <span className="text-green-700 font-bold text-[28px]">G</span>
            roci
            <span className="text-amber-500 font-bold text-[28px]">Q</span>
            ueen
          </a>
          <p className="text-zinc-400 mt-3 max-w-[300px] text-[13px]">
            All legal and authority taken by company only . and Responsibility
            of my company to provide best quality and quantity.
          </p>
          <p className=" text-zinc-900 font-semibold text-sm mt-5">
            2025 &copy; All Rights Reserved GrocyQueen.
          </p>
        </div>

        {/* list item for footer */}

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ's
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl"> Stay Connected </h5>
          <p className="mt-6 text-zinc-700">Question or Feedback ?</p>

          <div className="flex p-1 bg-white rounded-lg mt-5">
            <input
              type="email"
              placeholder="Email Address"
              id="e-mail"
              autoComplete="off"
              className="h-[5vh] pl-4 flex-1 focus:outline-none "
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl cursor-pointer hover:to-orange-700">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
