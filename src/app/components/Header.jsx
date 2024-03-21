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
    <div className="bg-[#181616] m-10">
      <div className="flex flex-row md:flex-row justify-between items-center">
        {/* Desktop Menu */}
        <Image
          src={logo}
          width={157}
          height={49}
          alt="HELLO"
          className="bg-red-500"
        />
        <div className="hidden md:flex gap-12 text-[#BDBCBC] items-center">
          <ul>30 Days of PM</ul>
          <ul>Newsletter</ul>
          <ul>Builders Cohort</ul>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex justify-end items-center">
          <div className="cursor-pointer" onClick={toggleMenu}>
            {/* Trigger element */}
            <button className="text-[#BDBCBC]">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>
      {/* Accordion Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-10 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-[#181616] text-[#BDBCBC] p-4 overflow-auto max-h-screen"
            ref={menuRef}
          >
            <div className="flex justify-between items-center mb-4">
              <Image src={logo} width={157} height={49} alt="HELLO" />
              <button className="text-[#BDBCBC]" onClick={toggleMenu}>
                Close
              </button>
            </div>
            <ul className="flex flex-col items-center">
              <li>30 Days of PM</li>
              <li>Newsletter</li>
              <li>Builders Cohort</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
