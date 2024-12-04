import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition-all">
          E-Commerce
        </Link>

        <button className="sm:hidden block" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          <Link
            to="/"
            className="hover:underline hover:text-gray-200 transition-all flex items-center"
          >
            <i className="fas fa-home mr-2"></i> Home
          </Link>
          <Link
            to="/cart"
            className="hover:underline hover:text-gray-200 transition-all flex items-center"
          >
            <i className="fas fa-shopping-cart mr-2"></i> Cart
            <span className="ml-2 bg-white text-blue-500 rounded-full px-2 py-1">
              {totalQuantity}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-blue-600">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-700 hover:text-white transition-all"
          >
            <i className="fas fa-home mr-2"></i> Home
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-2 hover:bg-blue-700 hover:text-white transition-all flex items-center"
          >
            <i className="fas fa-shopping-cart mr-2"></i> Cart
            <span className="ml-2 bg-white text-blue-500 rounded-full px-2 py-1">
              {totalQuantity}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
