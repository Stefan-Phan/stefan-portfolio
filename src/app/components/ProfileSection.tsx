// components/ProfileSection.js
import Image from "next/image";
import Link from "next/link";

export default function ProfileSection() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
      {" "}
      <div className="w-64 h-64 md:w-80 md:h-80 relative">
        {" "}
        <div className="w-full h-full overflow-hidden rounded-full bg-gray-600">
          <Image
            src="/profile-placeholder.jpg"
            alt="Nicol Rider"
            width={320}
            height={320}
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="text-center md:text-left max-w-md">
        {" "}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Hello</h2>{" "}
        <div className="mb-8 md:mb-10">
          {" "}
          <h3 className="text-lg md:text-xl font-medium mb-3">
            A Bit About Me
          </h3>{" "}
          <p className="text-gray-700">
            I'm a paragraph. Click here to add your own text and edit me. I'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
          {" "}
          <Link
            href="/resume"
            className="flex items-center justify-center w-48 h-16 md:w-24 md:h-24 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition-colors" // Responsive button size
          >
            Resume
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center w-48 h-16 md:w-24 md:h-24 rounded-full bg-red-500 text-white font-medium hover:bg-red-400 transition-colors" // Responsive button size
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center w-48 h-16 md:w-24 md:h-24 rounded-full bg-teal-300 text-black font-medium hover:bg-teal-200 transition-colors" // Responsive button size
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
