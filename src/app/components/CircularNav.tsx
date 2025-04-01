// components/CircularNav.js
import Link from "next/link";

export default function CircularNav() {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      <Link
        href="/resume"
        className="flex items-center justify-center w-24 h-24 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition-colors"
      >
        Resume
      </Link>
      <Link
        href="/projects"
        className="flex items-center justify-center w-24 h-24 rounded-full bg-red-500 text-white font-medium hover:bg-red-400 transition-colors"
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className="flex items-center justify-center w-24 h-24 rounded-full bg-teal-300 text-black font-medium hover:bg-teal-200 transition-colors"
      >
        Contact
      </Link>
    </div>
  );
}
