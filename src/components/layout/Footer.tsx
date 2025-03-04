import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="RoadRanger Logo"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Contact Details */}
        <div className="text-center md:text-right space-y-4">
          <p className="text-gray-400">Address: 123 Trucking Lane, Moldova</p>
          <p className="text-gray-400">Phone: +373 123 456 789</p>
          <p className="text-gray-400">Email: dispatch@roadranger.us</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            {/* Social Links */}
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D2B48C] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.127c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D2B48C] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />{" "}
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RoadRanger - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
