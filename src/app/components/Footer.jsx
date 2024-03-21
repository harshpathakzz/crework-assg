import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import d from "../../../public/d.svg";
import fb from "../../../public/fb.svg";
import be from "../../../public/be.svg";
import lin from "../../../public/lin.svg";
import line from "../../../public/line.svg";
const Footer = () => {
  return (
    <div className="bg-black min-h-[313px] py-[67px] px-[100px]">
      <div className="flex flex-col gap-2">
        <div className=" bg-black min-h-[198px] flex flex-row flex-wrap justify-center gap-5 mb-6 md:justify-between">
          <div>
            <Image src={logo} width={157} height={49} alt="Logo" />
          </div>
          <div class="grid grid-cols-2 gap-0   font-normal text-xl text-[#ADADAD] ">
            <div class="p-0">Newsletter</div>
            <div class="p-0">30 Days of PM</div>
            <div class="p-0">Builders Cohort</div>
            <div class=" p-0">Transition to PM role</div>
          </div>
          <div class="flex justify-center gap-1">
            <span class="mr-2">
              <Image src={d} width={42} height={42} alt="Logo" />
            </span>
            <span class="mr-2">
              <Image src={fb} width={42} height={42} alt="Logo" />
            </span>
            <span class="mr-2">
              <Image src={be} width={42} height={42} alt="Logo" />
            </span>
            <span>
              <Image src={lin} width={42} height={42} alt="Logo" />
            </span>
          </div>
        </div>
        <div className="mx-auto mb-6">
          <Image src={line} width={546} height={134} alt="Logo" />
        </div>
        <div className="text-[#ADADAD] text-xl text-center">
          <p>Copyright © 2024 Crework</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
