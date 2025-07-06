// src/components/Header.js
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation()
  // console.log(pathname);


  return (
    <header className="py-5 absolute w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img
              src="image/Black_Yellow_White_Simple_Minimalist_Initial_Name_Logo__4_-removebg-preview.png"
              alt="logo"
              className="w-[60px] h-[60px]"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-12 text-xl text-white font-semibold">
            <Link to="/" className={`cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400 ${pathname === "/" && "border-b-4 pb-2 border-purple-400"}`}>
              <i className="ri-home-7-line"></i> Home
            </Link>
            <Link to="/about" className={`cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400 ${pathname === "/about" && "border-b-4 pb-2 border-purple-400"}`}>
              <i className="ri-user-line"></i> About
            </Link>
            <Link to="/projects" className={`cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400 ${pathname === "/projects" && "border-b-4 pb-2 border-purple-400"}`}>
              <i className="ri-broadcast-line"></i> Project
            </Link>
            <Link to="/resume" className={`cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400 ${pathname === "/resume" && "border-b-4 pb-2 border-purple-400"}`}>
              <i className="ri-booklet-line"></i> Resume
            </Link>
            <Link to="/blog" className={`cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400 ${pathname.startsWith("/blogs")
              && "border-b-4 pb-2 border-purple-400"}`}>
              <i className="ri-news-line"></i> Blogs
            </Link>
            <Link to="/contact" className={`cursor-pointer duration-200 hover:border-b-4 pb-2 border-purple-400 ${pathname === "/contact" && "border-b-4 pb-2 border-purple-400"}`}>
              <i className="ri-phone-fill"></i> Contact
            </Link>
            <a
              href="https://github.com/om6064"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer px-3 py-2 rounded-xl mb-2 hover:-translate-y-1 transition-all bg-[#934cce5e]"
            >
              <i className="ri-github-fill"></i> Git
            </a>
          </nav>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#000000] h-screen rounded p-6 text-white flex flex-col gap-4 text-lg font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <i className="ri-home-7-line"></i> Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <i className="ri-user-line"></i> About
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              <i className="ri-broadcast-line"></i> Project
            </Link>
            <Link to="/resume" onClick={() => setIsOpen(false)}>
              <i className="ri-booklet-line"></i> Resume
            </Link>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              <i className="ri-news-line"></i> Blogs
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <i className="ri-phone-fill"></i> Contact
            </Link>
            <a
              href="https://github.com/om6064"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-[#934cce5e]"
            >
              <i className="ri-github-fill"></i> Git
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
