// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-6 w-6 bg-red-500 rounded-full mr-3"></div>
        <Link href="/">
          <h1 className="text-black font-bold text-xl md:text-2xl">
            {" "}
            {/* Responsive font size */}
            Stefan Phan
            <span className="text-gray-500 font-normal text-base">
              {" "}
              | Software Engineer
            </span>
          </h1>
        </Link>
      </div>
      <button className="text-2xl md:hidden">☰</button>{" "}
      {/* Hamburger menu (hidden on medium+ screens) */}
      <nav className="hidden md:block">
        {" "}
        {/* Hide on mobile, show on medium+ */}
        <ul className="flex space-x-6 text-sm items-center">
          <li>
            <Link href="/resume" className="text-gray-700 hover:text-black">
              Resume
            </Link>
          </li>
          <li>
            <div className="h-6 border-l border-black mx-3"></div>
          </li>
          <li>
            <Link href="/projects" className="text-gray-700 hover:text-black">
              Projects
            </Link>
          </li>
          <li>
            <div className="h-6 border-l border-black mx-3"></div>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
