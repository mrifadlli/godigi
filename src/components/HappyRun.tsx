import React from "react";
import Image from "next/image";
import Arrow from "@/assets/arrow-right.png";

export const HappyRun = () => {
  return (
    <div className="max-h-full bg-[url('/mob-happy-run.png')] md:bg-[url('/happy-run.png')] bg-cover bg-center">
      <div className='px-6 lg:px-[144px] pt-[136px] pb-[73px]'>
        <h1 className='text-[34px] md:text-[68px] font-bold md:leading-19'>ENJOY</h1>
        <h1 className='text-[34px] md:text-[68px] font-bold md:leading-19'>YOUR RUN</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-10 justify-items-center xl:px-30'>
        <div className="bg-[url('/bg-data-happryrun.png')] w-[324px] h-[196px] relative">
          <h1 className='text-white text-center text-[48px] md:text-[58px] font-bold absolute -mt-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            5K
          </h1>
          <p className="lg:hidden text-[20px] font-medium absolute -bottom-12 left-1/2 -translate-y-1/2 -translate-x-1/2">Rp 340.000</p>
        </div>
        <div className="bg-[url('/bg-data-happryrun.png')] w-[324px] h-[196px] relative">
          <h1 className='text-white text-center text-[48px] md:text-[58px] font-bold absolute -mt-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            10K
          </h1>
          <p className="lg:hidden text-[20px] font-medium absolute -bottom-12 left-1/2 -translate-y-1/2 -translate-x-1/2">Rp 340.000</p>
        </div>
        <div className="bg-[url('/bg-data-happryrun.png')] w-[324px] h-[196px] relative">
          <div className='absolute -mt-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <h1 className='text-white text-center text-[48px] md:text-[58px] font-bold leading-none'>
              HALF
            </h1>
            <p className='text-white text-[30px] font-normal'>MARATHON</p>
          </div>
          <p className="lg:hidden text-[20px] font-medium absolute -bottom-12 left-1/2 -translate-y-1/2 -translate-x-1/2">Rp 340.000</p>
        </div>
      </div>

      <div className='px-6 lg:px-[144px] pt-[80px] pb-[80px] md:flex md:justify-between md:items-center'>
        <div className='lg:w-[465px] md:w-[60%] w-auto'>
          <p className="text-[16px]">
            Register for Digiland and get 15GB of Free Quota, exclusively for
            Telkomsel customers!
          </p>
          <br />
          <p className="text-[16px]">
            Get ready for Digiland Run, a special part of Digiland 2025 that
            invites running enthusiasts, running communities, and the public to
            run with full enthusiasm & happiness in the 5K, 10K, and Half
            Marathon.
          </p>
        </div>

        <div className='mt-10'>
          <button className='border py-[11px] capitalize flex items-center px-[61.5px] space-x-3 cursor-pointer'>
            <h1 className='text-lg'>More Info</h1>
            <Image src={Arrow} width={20.63} height={15} alt='arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};
