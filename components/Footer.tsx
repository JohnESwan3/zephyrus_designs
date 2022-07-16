import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-50 shadow-inner shadow-slate-300">
      <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8">
        <div className="row-gap-10 lg:grid-cols-16 mb-8 grid">
          <div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
            <div>
              <p className="footer-main">Navigate</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/">
                    <a className="footer-secondary" aria-label="Home">
                      Home
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-main">About</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/">
                    <a className="footer-secondary" aria-label="About">
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2"></div>
        </div>
        <div className="flex flex-col justify-between border-t border-fuchsia-700 pt-5 pb-10 sm:flex-row">
          <p className="text-sm text-slate-600">
            © Copyright 2022{" "}
            <span className="text-fuchsia-700">Zephyrus Creations</span>. All
            rights reserved.
          </p>
          <div>
            <a
              href="/"
              target="_blank"
              aria-label="Facebook"
              className="text-slate-600 transition-colors duration-100 hover:text-fuchsia-700 ease-in text-xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
