import React from "react";
import Logo from "@/assets/icon-ticket-logo.png";
import Icon from "@/assets/end-icon.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const title = "get your ticket easily";
const subtext =
  "on Telkomsel website, get ready to be part of the excitement of Digiland!";

export const GetTicket = () => {
  return (
    <div className="flex items-start lg:items-center h-auto min-h-[100svh] md:min-h-[80svh] lg:min-h-[581px] relative overflow-hidden inset-0 bg-cover bg-top bg-[url('/bg-ticket.png')] py-[80px]">
      <div className='space-y-[40px] flex flex-col justify-center w-full h-full px-6 lg:px-[144px]'>
        <div className='space-y-4'>
          <h1 className='uppercase text-white text-4xl md:text-5xl font-bold'>{title}</h1>
          <p className='text-xl md:text-2xl text-white w-[80%]'>{subtext}</p>
        </div>
        <Image
          src={Logo}
          width={165}
          height={47}
          alt='logo'
          className='border'
        />
        <button className='w-fit border-2 text-lg px-4 py-2 flex items-center cursor-pointer'>
          {"Buy Ticket"}
          <Image src={Icon} alt='icon' width={24} height={24} />
        </button>
      </div>


      <div className='lg:flex absolute bottom-0 lg:-rotate-45 w-[200%] h-[80px] md:h-[136px] lg:top-[30px] -translate-y-1/2 justify-center space-x-4'>
        <MarqueeSection1 />
      </div>
      <div className='lg:flex absolute bottom-24 lg:-rotate-45 w-[200%] h-[80px] md:h-[136px] lg:top-[221px] -translate-y-1/2 justify-center space-x-4'>
        <MarqueeSection2 />
      </div>
    </div>
  );
};

const MarqueeSection1 = () => {
  return (
    <Marquee
      speed={50}
      direction="right"
      className='bg-gradient-to-br from-[#4CA5B3] to-[#7F7D99] w-full h-full flex items-center justify-center gap-[24px]'
    >
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
    </Marquee>
  );
};

const MarqueeSection2 = () => {
  return (
    <Marquee
      speed={50}
      className='bg-gradient-to-br from-[#A72772] to-[#AD2371] w-full h-full flex items-center justify-center gap-[24px]'
    >
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#DigilandRun</span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>
        #ElevatingYourFuture
      </span>
      <span className='text-white text-[24px] md:text-[40px] font-bold mx-8'>#Digiland2025</span>
    </Marquee>
  );
};
