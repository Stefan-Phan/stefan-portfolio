"use client";
// components/Header.js
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-6 w-6 bg-red-500 rounded-full mr-3"></div>
        <Link href="/">
          <h1 className="text-black font-bold text-xl md:text-2xl">
            Stefan Phan
            <span className="text-gray-500 font-normal text-base">
              | Software Engineer
            </span>
          </h1>
        </Link>
      </div>
      <button
        className={`${isMenuOpen ? "hidden" : "md:hidden"} text-2xl`}
        onClick={toggleMenu}
      >
        ☰
      </button>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden md:block"
        } md:flex md:items-center w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm items-center">
          <li>
            <Link href="/resume" className="text-gray-700 hover:text-black">
              Resume
            </Link>
          </li>
          <li className="hidden md:block">
            <div className="h-6 border-l border-black mx-3"></div>
          </li>
          <li>
            <Link href="/projects" className="text-gray-700 hover:text-black">
              Projects
            </Link>
          </li>
          <li className="hidden md:block">
            <div className="h-6 border-l border-black mx-3"></div>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </li>
          {isMenuOpen && (
            <li className="md:hidden">
              <button onClick={toggleMenu} className="text-xl">
                x
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
