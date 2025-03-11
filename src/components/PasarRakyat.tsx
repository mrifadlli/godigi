import React from "react";
import Arrow from "@/assets/arrow-right.png"
import Image from "next/image";

export const PasarRakyat = () => {
  return (
    <div className='h-full w-full bg-white flex justify-center'>
      <div
        className="bg-[url('/homepage-section6-inner-mobile.png')] md:bg-[url('/bg-pasar-rakyat.png')] relative flex flex-col items-between justify-between w-full max-w-6xl mx-auto text-left md:text-center inset-0 bg-cover bg-top h-auto min-h-[70svh] md:min-h-[1027px] pt-[80px] md:pt-[140px] pb-[80px] md:pb-[120px] px-6"
      >
        <div className='space-y-[22.57px]'>
          <div className="w-[188px] md:w-fit text-[40px] md:text-[68px] font-bold leading-[36px] md:leading-[61px] capitalize bg-[url('/bg-text-pasar-rakyat.png')] bg-clip-text text-transparent">
            PASAR RAKYAT
          </div>
          <div className='w-fit text-stroke-1-black text-[20px] md:text-[32px] font-semibold leading-[28px] md:leading-[48px] tracking-[3.2px] md:tracking-[5.12px] capitalize ms-1'>
            UMKM
          </div>
        </div>

        <div className='flex justify-end'>
            <div className='w-[70%]'>
              <p className="text-right text-[14px] md:text-[20px]">Enjoy & explore <span className="font-bold">#PasarRakyatUMKM</span> at</p>
              <p className="text-right text-[14px] md:text-[20px]">Digiland 2025.</p>
              <br />
              <p className="text-right text-[14px] md:text-[20px]">
                Don&apos;t forget to buy more and support
              </p>
              <p className="text-right text-[14px] md:text-[20px]">
              local business Indonesia!
              </p>
              <br />
              <div className="flex justify-end">
              <button className="flex items-center text-lg border px-8 py-2 cursor-pointer">
                <span>More Info</span>
                <Image src={Arrow} width={20} height={20} alt="arrow" />
              </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
