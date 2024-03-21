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
        <div className=" bg-black min-h-[198px] flex flex-row flex-wrap justify-center gap-5 mb-1 md:justify-between">
          <div>
            <Image
              className="cursor-pointer"
              src={logo}
              width={157}
              height={49}
              alt="Logo"
            />
          </div>
          <div class="grid grid-cols-2 gap-x-15  gap-y-2 font-normal text-sm text-[#ADADAD] md:h-[5vh]">
            <div class="p-0 cursor-pointer">About us</div>
            <div class="p-0 cursor-pointer">Our Graduates</div>
            <div class="p-0 cursor-pointer">Curriculum</div>
            <div class=" p-0 cursor-pointer">Refund Policy</div>
          </div>
          <div class="flex justify-center gap-1">
            <span class="mr-2">
              <Image
                className="cursor-pointer"
                src={d}
                width={42}
                height={42}
                alt="Logo"
              />
            </span>
            <span class="mr-2">
              <Image
                className="cursor-pointer"
                src={fb}
                width={42}
                height={42}
                alt="Logo"
              />
            </span>
            <span class="mr-2">
              <Image
                className="cursor-pointer"
                src={be}
                width={42}
                height={42}
                alt="Logo"
              />
            </span>
            <span>
              <Image
                className="cursor-pointer"
                src={lin}
                width={42}
                height={42}
                alt="Logo"
              />
            </span>
          </div>
        </div>
        <div className="mx-auto mb-4">
          <Image src={line} width={546} height={134} alt="Logo" />
        </div>
        <div className="text-[#ADADAD] text-xl text-center">
          <p className="text-xs">Copyright © 2024 Crework</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
