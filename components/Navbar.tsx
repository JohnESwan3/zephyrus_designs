import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full p-4 bg-slate-50 shadow-lg border-b border-slate-300 shadow-slate-300 h-[80px] flex text-center items-center">
      <div className="flex flex-row justify-between max-w-[1920px] mx-auto w-full text-center items-center">
        <div className="p-2">
          <div className="p-2">
            <Link href="/">
              <a
                className="font-semibold text-lg text-fuchsia-600 tracking-wider"
                aria-label="Zephyrus Designs"
              >
                Zephyrus Designs
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:inline">
          <ul className="flex flex-row text-center items-center tracking-wide space-x-3 px-2 py-1">
            <li className="hover:text-fuchsia-600 transition-colors duration-150 ease-in">
              <Link href="/">
                <a className="p-2" aria-label="Home">
                  Home
                </a>
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition-colors duration-150 ease-in">
              <Link href="/">
                <a className="p-2" aria-label="Custom">
                  Custom
                </a>
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition-colors duration-150 ease-in ">
              <Link href="/">
                <a aria-label="Templates" className="p-2">
                  Templates
                </a>
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition-colors duration-150 ease-in">
              <Link href="/">
                <a className="p-2" aria-label="Contact">
                  Contact
                </a>
              </Link>
            </li>
            <li className="flex flex-row text-center items-center space-x-4 p-1 shadow-md hover:shadow border-slate-300 border hover:text-fuchsia-600 transition-all duration-100 ease-in shadow-slate-400 rounded-full">
              <Link href="/">
                <a aria-label="Home" className="p-2">
                  <FaUserAlt className="text-lg" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <div
            className=" space-x-4 p-1 shadow-md hover:shadow border-slate-300 border hover:text-fuchsia-600 transition-all duration-100 ease-in shadow-slate-400 rounded-full"
            onClick={handleNav}
          >
            {nav ? <BiMenuAltRight size={25} /> : <BiX size={25} />}
          </div>
          <div
            className={
              nav
                ? "md:hidden fixed right-[-100%] top-20 h-[90%] ease-out duration-200"
                : "md:hidden fixed right-0 top-20 w-[100%] sm:w-[50%] h-[100%] bg-slate-50 ease-in duration-200 z-10 shadow-lg border-l border-slate-300 shadow-slate-400"
            }
          >
            <ul className="flex flex-col w-full text-left p-2 space-y-4">
              <li>home</li>
              <li>custom</li>
              <li>templates</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
