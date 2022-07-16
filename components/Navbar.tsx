import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="p-4 bg-slate-50 shadow-lg border-b border-slate-300 shadow-slate-300 h-[80px] flex text-center items-center">
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
        <div>
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
      </div>
    </nav>
  );
}
