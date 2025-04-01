// components/Footer.js
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-8 px-4 flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          <div className="text-center">
            <h4 className="font-bold mb-2">Email</h4>
            <p className="text-gray-600 text-sm">
              phannguyentuanhung2005@gmail.com
            </p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2">Follow Me</h4>
            <div className="flex space-x-3 text-gray-600 justify-center">
              <a
                href="https://www.linkedin.com/in/hungphan005/"
                className="hover:text-gray-900"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/_pnt.hung_/"
                className="hover:text-gray-900"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/hungphan005"
                className="hover:text-gray-900"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
