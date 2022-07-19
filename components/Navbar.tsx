import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/all";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userIsOpen, setUserIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-slate-100 shadow-lg shadow-slate-300" id="nav">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a aria-label="Home">
                    <h1 className="text-xl font-semibold text-fuchsia-600">
                      Zephyrus Creations
                    </h1>
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="full-nav-item" aria-label="Home">
                      Home
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="full-nav-item" aria-label="Portfolio">
                      Custom
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="full-nav-item" aria-label="Blog">
                      Templates
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="full-nav-item" aria-label="About">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => setUserIsOpen(!userIsOpen)}
                type="button"
                aria-controls="user-menu"
                aria-expanded="false"
                className="p-3 shadow-inner rounded-full shadow-slate-400 text-xl hover:text-fuchsia-600 hover:shadow-fuchsia-900 transition-all duration-100 ease-in focus:outline-none"
              >
                <span className="sr-only">Open User Menu</span>
                <FaUserAlt />
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-slate-100 p-2 text-fuchsia-600 shadow-inner shadow-slate-300 transition-all hover:shadow-fuchsia-900 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={userIsOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="hidden md:block" id="user-menu">
              <div
                ref={ref}
                className="space-y-1 px-2 pt-2 pb-3 text-center items-center transition-all sm:px-3"
              >
                <div className="flex flex-row justify-center space-x-4">
                  <button className="px-3 py-1 bg-slate-900 rounded-lg text-slate-100 hover:scale-110 transition-all duration-75 ease-in font-semibold cursor-pointer">
                    Log In
                  </button>
                  <button className="px-3 py-1 shadow-inner shadow-slate-400 rounded-lg hover:text-fuchsia-600 transition-all duration-75 ease-in font-semibold cursor-pointer">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="space-y-1 px-2 pt-2 pb-3 text-center transition-all sm:px-3"
              >
                <Link href="/">
                  <a className="mobile-nav-item" aria-label="Home">
                    Home
                  </a>
                </Link>
                <Link href="/" aria-label="Portfolio">
                  <a className="mobile-nav-item">Contact</a>
                </Link>
                <Link href="/">
                  <a className="mobile-nav-item" aria-label="Blog">
                    Templates
                  </a>
                </Link>
                <Link href="/">
                  <a className="mobile-nav-item" aria-label="About">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
