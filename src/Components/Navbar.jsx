import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaMoon, FaSun } from "react-icons/fa";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Properties", href: "/properties" },
  { name: "Partners", href: "/partners" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-15 h-15 rounded-lg flex items-center justify-center ">
              <span className="text-white font-bold text-lg">
                <img
                  src="../src/assets/company_Logo/Better_parker.png"
                  alt="Company Logo"
                />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-yellow-500 border-b-2 border-yellow-500 pb-0"
                    : "text-gray-500 hover:text-yellow-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info, Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <FaPhone className="w-4 h-4" />
              <span>
                {" "}
                <a href="tel:+9715455768">+971 54 557 628</a>
              </span>
            </div>
            {/* Theme Toggle */}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              {darkMode ? (
                <FaSun className="w-4 h-4 text-yellow-500" />
              ) : (
                <FaMoon className="w-4 h-4 text-gray-600" />
              )}
            </button> */}
            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-4 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600 transition"
            >
              Lets Talk Now!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-yellow-500 bg-yellow-50"
                      : "text-gray-500 hover:text-yellow-500 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <FaPhone className="w-4 h-4" />
                  <span>+971 545 576 28</span>
                </div>
                {/* <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  {darkMode ? (
                    <FaSun className="w-4 h-4 text-yellow-500" />
                  ) : (
                    <FaMoon className="w-4 h-4 text-gray-600" />
                  )}
                </button> */}
              </div>
              <div className="px-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600 transition"
                >
                  Lets Talk Now!
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
