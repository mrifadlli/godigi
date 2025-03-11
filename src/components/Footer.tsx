import React from "react";
import Image from "next/image";
import Icon1 from "@/assets/icon-telkomsel.png";
import Icon2 from "@/assets/icon-telkomsel2.png";
import DividerFill from "@/assets/divider-fill.png"
import Logo from "@/assets/logo.png";
import Marquee from "react-fast-marquee";
import IconMob1 from "@/assets/mobile-icon-footer1.png"
import IconMob2 from "@/assets/mobile-icon-footer-2.png"

export const Footer = () => {
  return (
    <div className="min-h-screen h-full bg-[url('/bg-footer.png')] bg-cover bg-center relative">
      <div className='absolute top-10 w-full px-4 lg:px-[144px]'>
        <div className='hidden md:flex justify-between items-center w-full'>
          <Image src={Icon1} alt='icon1' width={184.33} height={52.27} className="hidden md:block" />
          <Image src={Icon2} alt='icon2' width={184.33} height={52.27} className="hidden md:block" />
        </div>
        <div className="md:hidden flex flex-col justify-center items-center space-y-8">
          <Image src={IconMob1} alt='icon2' width={331} height={52.27} />
          <Image src={IconMob2} alt='icon2' width={331} height={52.27} />
        </div>
      </div>
      <div className='absolute xl:bottom-[300px] bottom-1/2 left-1/2 -translate-x-1/2 -translatey1/2'>
        <Image
          src={Logo}
          alt='logo'
          className='w-[249px] h-[181px] md:w-[303px] md:h-[221px]'
        />
      </div>

      
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-50 space-y-8'>
        <Marquee speed={50} className="flex items-center">
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            pasar rakyat
          </span>
          <Image src={DividerFill} width={105.5} height={5} alt="divider" className="mx-8 text-center" />
          <span className="text-white uppercase text-[40px] md:text-[98px] font-bold mx-8">
            digiland
          </span>
        </Marquee>
        <h1 className="text-white text-center">Copyright © 2025 Digiland. All rights reserved.</h1>
      </div>
    </div>
  );
};
