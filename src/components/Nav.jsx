import React, { useState, useEffect } from "react";
import logo from "../assets/logo-white.svg";
import { Search, X, Menu } from "lucide-react";

function Nav() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBorderAnimation, setShowBorderAnimation] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    if (isSearchVisible) {
      const timer = setTimeout(() => {
        setShowBorderAnimation(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setShowBorderAnimation(false);
    }
  }, [isSearchVisible]);

  const slideInTop = {
    animation: 'slideInTop 0.5s ease-out forwards'
  };

  const slideInLeft = {
    animation: 'slideInLeft 0.5s ease-out 0.2s forwards',
    opacity: 0,
    transform: 'translateX(-20px)'
  };

  const slideInRight = {
    animation: 'slideInRight 0.5s ease-out 0.2s forwards',
    opacity: 0,
    transform: 'translateX(20px)'
  };

  const fadeIn = {
    animation: 'fadeIn 0.7s ease-out 0.4s forwards',
    opacity: 0
  };

  const slideDown = {
    animation: 'slideDown 0.3s ease-out forwards'
  };

  return (
    <>
      <style jsx>
        {`
          @keyframes slideInTop {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideInLeft {
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInRight {
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }

          @keyframes slideDown {
            from {
              transform: translateY(-10px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes borderExpand {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          @keyframes rotateSlideIn {
            0% {
              opacity: 0;
              transform: rotate(-90deg) scale(0.8) translateY(-10px);
            }
            50% {
              opacity: 0.7;
              transform: rotate(-45deg) scale(0.9) translateY(-5px);
            }
            100% {
              opacity: 0.7;
              transform: rotate(0deg) scale(1) translateY(0);
            }
          }

          @keyframes rotateSlideOut {
            0% {
              opacity: 0.7;
              transform: rotate(0deg) scale(1);
            }
            50% {
              opacity: 0.4;
              transform: rotate(45deg) scale(1.1);
            }
            100% {
              opacity: 0;
              transform: rotate(90deg) scale(0.8) translateY(-10px);
            }
          }

          .nav-link {
            position: relative;
            display: inline-block;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            bottom: 8px;
            left: 0;
            height: 0.1rem;
            background-color: #fff;
            width: 0%;
            transition: width 0.3s ease-out;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-link.active::after {
            width: 100%;
          }

          /* Search overlay nav links */
          .search-nav-link {
            position: relative;
            display: inline-block;
          }

          .search-nav-link::after {
            content: "";
            position: absolute;
            bottom: 8px;
            left: 0;
            height: 0.1rem;
            background-color: #4A5568;
            width: 0%;
            transition: width 0.3s ease-out;
          }

          .search-nav-link:hover::after {
            width: 100%;
          }

          .search-nav-link.active::after {
            width: 100%;
          }

          .rotate-on-hover {
            transition: all 0.3s ease;
          }

          .rotate-on-hover:hover {
            transform: rotate(90deg);
            opacity: 1;
          }

          .scale-on-hover {
            transition: all 0.3s ease;
          }

          .scale-on-hover:hover {
            transform: scale(1.1);
          }

          .slide-hover {
            transition: all 0.2s ease;
          }

          .slide-hover:hover {
            transform: translateX(8px);
          }

          .button-hover {
            transition: all 0.2s ease;
          }

          .button-hover:hover {
            transform: scale(1.05);
          }

          /* Responsive breakpoints */
          @media (max-width: 640px) {
            .mobile-padding {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            
            .mobile-nav-padding {
              padding-left: 2rem;
            }
          }

          @media (min-width: 641px) and (max-width: 768px) {
            .tablet-padding {
              padding-left: 4rem;
              padding-right: 2rem;
            }
            
            .tablet-nav-padding {
              padding-left: 6rem;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .desktop-sm-padding {
              padding-left: 6rem;
              padding-right: 3rem;
            }
            
            .desktop-sm-nav-padding {
              padding-left: 8rem;
            }
          }
        `}
      </style>

      {!isSearchVisible && (
        <header
          className="h-fit shadow-sm top-0 z-50 flex w-full items-center absolute flex-col"
          style={slideInTop}
        >
          {/* Top section with lighter shade */}
          <div className="w-full bg-[#3A3E42] h-auto p-2 flex flex-col-reverse lg:flex-row md:flex-row items-center justify-between text-xs sm:text-sm text-white">
            {/* Left side: Logo - Responsive */}
            <div className="flex items-center mobile-padding w-full pt-4 lg:w-auto md:w-[15rem] relative h-[2rem]   justify-center tablet-padding desktop-sm-padding lg:pl-[20rem] md:ml-[5rem]">
              <img
                src={logo}
                alt="Logo"
                className="lg:w-[20rem]  w-[10rem] md:w-[15rem] absolute"
              />  
            </div>

            {/* Right side: Service Times - Responsive */}
            <div className="text-right leading-snug pr-2 sm:pr-3 md:pr-4 lg:pr-6 xl:pr-8">
              <div className="bg-black p-2 border border-white/40">
                <p>Sunday Services: 9:00am and 11:30am,Children and Teens: 9:00am and 11:30am</p>
              </div>
            </div>
          </div>

          {/* Navigation section */}
          <div className="w-full mx-auto px-2 sm:px-4 flex justify-center bg-[#292C2F]">
            <div className="flex justify-between items-center h-full mobile-nav-padding tablet-nav-padding desktop-sm-nav-padding lg:pl-48 w-full">

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-4 xl:space-x-8 p-4 text-white text-base xl:text-lg ">
                <a
                  href="#"
                  className={`nav-link transition-colors duration-200 pb-2 ${
                    activeLink === "Home" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("Home")}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`nav-link transition-colors duration-200 pb-2 ${
                    activeLink === "Events" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("Events")}
                >
                  Events
                </a>
                <a
                  href="#"
                  className={`nav-link transition-colors duration-200 pb-2 ${
                    activeLink === "Blog" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("Blog")}
                >
                  Blog
                </a>
                <a
                  href="#"
                  className={`nav-link transition-colors duration-200 pb-2 ${
                    activeLink === "Donation" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("Donation")}
                >
                  Donation
                </a>
                <a
                  href="#"
                  className={`nav-link transition-colors duration-200 pb-2 ${
                    activeLink === "Contacts" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("Contacts")}
                >
                  Contacts
                </a>
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center ml-auto pr-4 lg:pr-8">
                <Search
                  className="inline-block mr-3 sm:mr-4 cursor-pointer w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 font-light text-white opacity-70 hover:opacity-100 scale-on-hover"
                  onClick={() => setIsSearchVisible(true)}
                />
                <button className="bg-[#fff172] hover:bg-[#ddda12]  text-slate-800 font-bold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base cursor-pointer transition-colors duration-200 button-hover rounded">
                  Donate
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center ml-auto pr-2 p-2">
                <Search
                  className="inline-block mr-3 cursor-pointer w-5 h-5 font-light text-white opacity-70 scale-on-hover"
                  onClick={() => setIsSearchVisible(true)}
                />
                <Menu
                  className="cursor-pointer w-6 h-6 text-white scale-on-hover"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div
                className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg z-40"
                style={slideDown}
              >
                <nav className="flex flex-col p-4 space-y-2">
                  <a
                    href="#"
                    className={`nav-link text-gray-900 transition-colors duration-200 py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 slide-hover ${
                      activeLink === "Home" ? "active bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("Home");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className={`nav-link text-gray-900 transition-colors duration-200 py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 slide-hover ${
                      activeLink === "Events" ? "active bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("Events");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Events
                  </a>
                  <a
                    href="#"
                    className={`nav-link text-gray-900 transition-colors duration-200 py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 slide-hover ${
                      activeLink === "Blog" ? "active bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("Blog");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className={`nav-link text-gray-900 transition-colors duration-200 py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 slide-hover ${
                      activeLink === "Donation" ? "active bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("Donation");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Donation
                  </a>
                  <a
                    href="#"
                    className={`nav-link text-gray-900 transition-colors duration-200 py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 slide-hover ${
                      activeLink === "Contacts" ? "active bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("Contacts");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Contacts
                  </a>
                  <button className="bg-[#fff172] hover:bg-[#ddda12]  text-slate-800 font-bold px-4 py-3 text-center cursor-pointer transition-all duration-200 rounded-lg mt-4 button-hover">
                    Donate
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>
      )}

      {/* Search Overlay */}
      {isSearchVisible && (
        <header
          className="bg-gradient-to-br p-2 sm:p-4 h-64 bg-[#3A3E42] sm:h-72 md:h-80 lg:h-96 shadow-lg top-0 z-50 w-full absolute"
          style={slideInTop}
        >
          <div className="w-full mx-auto px-2 sm:px-4">
            <div className="flex justify-between items-center h-16 sm:h-20 lg:h-28">
              {/* Logo */}
              <div className="flex" style={slideInLeft}>
                <img
                  src={logo}
                  alt="Logo"
                  className="w-24 sm:w-32 md:w-36 lg:w-40 xl:w-48 h-auto"
                />
              </div>
              {/* Close button */}
              <div style={slideInRight}>
                <X
                  className="inline-block cursor-pointer w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 font-light text-white transition-all duration-300 ease-in-out hover:text-white hover:rotate-90 hover:scale-110 active:scale-95"
                  onClick={() => {
                    setTimeout(() => {
                      setIsSearchVisible(false);
                      setIsMobileMenuOpen(false);
                    }, 300);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex items-center relative mt-8 sm:mt-12 lg:mt-16">
            <div className="w-full relative" style={fadeIn}>
              <input
                placeholder="Type words and hit enter"
                className="w-full outline-none border-b-2 border-b-transparent p-2 sm:p-3 text-lg sm:text-xl lg:text-2xl placeholder:text-lg sm:placeholder:text-xl lg:placeholder:text-2xl placeholder:text-white/60 pb-3 sm:pb-4 caret-slate-600 relative z-10 transition-all duration-200 focus:placeholder:opacity-50 bg-transparent text-slate-800"
              />
              {/* Animated border */}
              <div
                className="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out"
                style={{
                  width: showBorderAnimation ? "100%" : "0%",
                  transformOrigin: "left center",
                }}
              />
            </div>
            <Search
              className="inline-block cursor-pointer w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 font-light text-white transition-all duration-200 ease-in-out hover:text-slate-700 hover:scale-105 active:scale-95 absolute right-4 sm:right-8 md:right-12 lg:right-24 bottom-2 sm:bottom-3"
              style={{ ...fadeIn, animationDelay: "0.6s" }}
              onClick={() => {
                // Handle search functionality
              }}
            />
          </div>

          {/* Mobile Navigation in Search Overlay */}
          <div className="md:hidden px-4 mt-6">
            <nav className="flex flex-wrap gap-4 justify-center" style={{ ...fadeIn, animationDelay: "0.5s" }}>
              <a
                href="#"
                className={`search-nav-link text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm ${
                  activeLink === "Home" ? "active text-slate-900" : ""
                }`}
                onClick={() => setActiveLink("Home")}
              >
                Home
              </a>
              <a
                href="#"
                className={`search-nav-link text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm ${
                  activeLink === "Events" ? "active text-slate-900" : ""
                }`}
                onClick={() => setActiveLink("Events")}
              >
                Events
              </a>
              <a
                href="#"
                className={`search-nav-link text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm ${
                  activeLink === "Blog" ? "active text-slate-900" : ""
                }`}
                onClick={() => setActiveLink("Blog")}
              >
                Blog
              </a>
              <a
                href="#"
                className={`search-nav-link text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm ${
                  activeLink === "Donation" ? "active text-slate-900" : ""
                }`}
                onClick={() => setActiveLink("Donation")}
              >
                Donation
              </a>
              <a
                href="#"
                className={`search-nav-link text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm ${
                  activeLink === "Contacts" ? "active text-slate-900" : ""
                }`}
                onClick={() => setActiveLink("Contacts")}
              >
                Contacts
              </a>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}

export default Nav;