"use client";

import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto">
      <div>
        {/* Your logo or placeholder */}
        <img className="w-16 cursor-pointer" src="..." alt="Logo" />
      </div>
      <div
        className={`nav-links duration-500 ${
          isOpen
            ? ""
            : "md:static absolute bg-white md:min-h-[fit-content] min-h-[60vh] left-0 top-[-100%]"
        } md:w-auto w-full flex items-center px-5`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a href="/" className="hover:text-gray-500">
              Products
            </a>
          </li>
          <li>
            <a href="/solution" className="hover:text-gray-500">
              Solution
            </a>
          </li>
          <li>
            <a href="/resource" className="hover:text-gray-500">
              Resource
            </a>
          </li>
          <li>
            <a href="/developers" className="hover:text-gray-500">
              Developers
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-gray-500">
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Sign in
        </button>
        <button
          onClick={toggleMenu}
          className="text-3xl cursor-pointer md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
