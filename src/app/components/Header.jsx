import React from "react";
import Image from "next/image";
import "../../../public/logo.svg";

const Header = () => {
  return (
    <div className="bg-[#181616] my-8 mx-12 flex justify-between">
      <div className="w-[157px] h-[49px] bg-blue-500">Crework</div>
      <div className="flex gap-12 text-[#BDBCBC] items-center">
        <ul>30 Days of PM</ul>
        <ul>Newsletter</ul>
        <ul>Builders Cohort</ul>
      </div>
    </div>
  );
};

export default Header;
