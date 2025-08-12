import { useState, useEffect, useRef } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50  bg-opacity-80 backdrop-blur-lg shadow-lg">
      <div className="flex justify-between items-center text-white p-2 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold font-pacifico tracking-widest bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text ">
          <h1>Danish</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 text-lg font-medium  items-center">
          <a href="#Home" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#Projects" className="hover:text-gray-400 transition">
            Projects
          </a>
          <a href="#Experience" className="hover:text-gray-400 transition">
            Experience
          </a>
          <a href="#TechStack" className="hover:text-gray-400 transition">
            Tech Stack
          </a>
          <a href="#Education" className="hover:text-gray-400 transition">
            Education
          </a>
          <a href="#Contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>
        {/* <div className="hidden md:flex space-x-6 text-lg font-medium  items-center">
          <a
            href="https://www.instagram.com/ali.hassam1/"
            className="hover:text-gray-400 transition items-center"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Hassam-01"
            className="hover:text-gray-400 transition"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hassam-ali-14681618a/"
            className="hover:text-gray-400 transition"
          >
            <GrLinkedin />
          </a> */}
        {/* </div> */}

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Faded Background When Dropdown is Open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-gray-900 text-white p-4 space-y-4 z-50"
        >
          <a
            href="#Home"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#Projects"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#About"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#Contact"
            className="block hover:text-gray-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          {/* <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/ali.hassam1/"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Hassam-01"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hassam-ali-14681618a/"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <GrLinkedin />
            </a>
          </div> */}
        </div>
      )}
    </div>
  );
}
