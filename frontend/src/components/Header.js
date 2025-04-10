import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-400 to-green-500 shadow-md py-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          ShopEase
        </h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300"
          >
            Cart
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
