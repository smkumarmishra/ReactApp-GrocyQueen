import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`sticky top-0  bg-white z-50 ${
          isScroll ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.70)]" : ""
        }`}
      >
        <nav className="flex items-center justify-between max-w-[1400px]  mx-auto md:h-[14vh] h-[12vh]  px-8 rounded-b-sm text-black">
          {/* logo is here-- */}
          <div className="font-bold text-[18px]">
            <Link to="/">
              <span className="text-green-700 font-bold text-[28px]">G</span>
              roci
              <span className="text-amber-500 font-bold text-[28px]">Q</span>
              ueen
            </Link>
          </div>
          {/* desktop NavLinks */}
          <ul className="md:flex gap-7 text-[16px] font-semibold hidden">
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
              href="#process"
                className="font-semibold tracking-wider  hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider  hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Navbar action Icons area */}
          <div className="flex gap-6 items-center">
            <div className="border-2 border-orange-400 rounded-full p-1 md:flex hidden">
              <input
                type="text"
                name="text"
                placeholder="Search....."
                autoComplete="off"
                className="flex-1 h-[5vh] px-3.4 focus:outline-none px-1"
              />
              <button className="bg-gradient-to-b from-red-600 to-orange-600  flex items-center justify-center border rounded-full h-[35px] w-[35px] text-[18px] text-white font-bold cursor-pointer">
                <IoMdSearch />
              </button>
            </div>
            <a href="#" className="text-zinc-700 text-2xl">
              <GoHeartFill />
            </a>

            <a href="#" className="text-zinc-700 text-2xl">
              <HiShoppingBag />
            </a>

            {/* Hamburg button */}

            <a
              href="#"
              className="text-zinc-900 text-3xl md:hidden"
              onClick={toggleMenu}
            >
              {showMenu ? <AiOutlineClose /> : <TbMenu2 />}
            </a>
          </div>

          {/* ------------mobile Menu--------- */}

          <ul
            className={`flex items-center flex-col gap-y-10 bg-orange-300/80 backdrop-blur-lg p-10 text-[18px] font-semibold  md:hidden absolute top-35 -left-full transform -translate-x-1/2 rounded-3xl transition-all duration-400 shadow-xl ${
              showMenu ? "left-1/2" : ""
            }`}
          >
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider  hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider  hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
            <li
              className={
                "border-2 border-orange-400 rounded-full p-1 flex md:hidden"
              }
            >
              <input
                type="text"
                name="text"
                placeholder="Search....."
                autoComplete="off"
                className="flex-1 h-[5vh] px-3.4 focus:outline-none px-1"
              />
              <button className="bg-gradient-to-b from-red-600 to-orange-600  flex items-center justify-center border rounded-full h-[35px] w-[35px] text-[18px] text-white font-bold cursor-pointer">
                <IoMdSearch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
