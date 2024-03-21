"use client";

import React, { useState } from "react";

function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="p-5  shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-Poppins cursor-pointer">
          <img
            className="h-10 inline"
            src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
            alt="Logo"
          />
          tailwind
        </span>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </span>
      </div>

      <ul
        className={`md:flex md:items-center ${
          menuOpen ? "static" : "absolute"
        } bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 ${
          menuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
        } transition-all ease-in duration-500`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            SERVICE
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            CONTACT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-cyan-500 duration-500">
            BLOG'S
          </a>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <button className="bg-cyan-400 text-white font-Poppins duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
            Get started
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header2;
