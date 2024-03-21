"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#1B1919] flex flex-row justify-between items-center p-4 min-h-20 ">
      <Image
        src={logo}
        width={157}
        height={49}
        alt="HELLO"
        className="mr-4" // Add margin for spacing
      />
      <nav className="hidden md:flex gap-12 text-[#BDBCBC] items-center">
        <ul>30 Days of PM</ul>
        <ul>Newsletter</ul>
        <ul>Builders Cohort</ul>
      </nav>
      <div className="md:hidden flex items-center">
        <button className="text-[#BDBCBC] cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-50 h-full overflow-auto"
          onClick={handleOutsideClick}
        >
          <div className="bg-[#181616] text-[#BDBCBC] p-4 max-h-screen">
            <div className="flex justify-between items-center mb-4">
              <Image src={logo} width={157} height={49} alt="HELLO" />
              <button className="text-[#BDBCBC]" onClick={toggleMenu}>
                Close
              </button>
            </div>
            <ul className="flex flex-col items-center gap-6">
              <li>30 Days of PM</li>
              <li>Newsletter</li>
              <li>Builders Cohort</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
