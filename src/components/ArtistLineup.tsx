import Image from "next/image";
import React from "react";
import Arrow from "@/assets/arrow-right.png";
import Arrow2 from "@/assets/quill_arrow-right.png";
import Marquee from "react-fast-marquee";
import Artist1 from "@/assets/artist-1.png";
import Artist2 from "@/assets/artist-2.png";
import Artist3 from "@/assets/artist-3.png";
import Artist4 from "@/assets/artist-4.png";
import Artist5 from "@/assets/artist-5.png";
import Artist6 from "@/assets/artist-6.png";
import Bernadya from "@/assets/bernadya.png";
import Ppop from "@/assets/p-pop.png";
import Nassar from "@/assets/nassar.png";
import Tandini from "@/assets/t-andini.png";
import Jkt48 from "@/assets/jkt-48.png";
import Padi from "@/assets/padi.png";

export const ArtistLineup = () => {
  return (
    <div className="min-h-[806px] h-full bg-[url('/bg-mob-artist.png')] md:bg-[url('/bg-artist-lineup.png')] bg-cover bg-center">
      <div className='hidden md:block'>
        <div className='px-6 lg:px-[144px] flex justify-between items-center pt-[80px] pb-[40px]'>
          <h1 className='text-white uppercase text-[44px] font-bold'>
            festival music
          </h1>
          <button className='border py-[11px] capitalize flex items-center px-[61.5px] space-x-3 cursor-pointer'>
            <h1 className="text-lg">Buy Ticket</h1>
            <Image src={Arrow} width={20.63} height={15} alt='arrow' />
          </button>
        </div>

        <div className=''>
          <Marquee className='gap-x-[23px] pt-[40px]'>
            <Image className="mx-8" src={Artist1} width={273} height={331.5} alt='artist1' />
            <Image className="mx-8" src={Artist2} width={273} height={331.5} alt='artist1' />
            <Image className="mx-8" src={Artist3} width={273} height={331.5} alt='artist1' />
            <Image className="mx-8" src={Artist4} width={273} height={331.5} alt='artist1' />
            <Image className="mx-8" src={Artist5} width={273} height={331.5} alt='artist1' />
            <Image className="mx-8" src={Artist6} width={273} height={331.5} alt='artist1' />
          </Marquee>
        </div>
      </div>

      <div className='md:hidden block overflow-hidden pt-[80px]'>
        <Marquee className='pb-[20px]'>
          <h1 className='uppercase text-white font-bold text-2xl'>
            &nbsp;bernadya&nbsp;.
          </h1>
          <h1 className='uppercase text-white font-bold text-2xl'>
            &nbsp;tiara andini&nbsp;.
          </h1>
          <h1 className='uppercase text-white font-bold text-2xl'>
            &nbsp;JKT48&nbsp;.
          </h1>
          <h1 className='uppercase text-white font-bold text-2xl'>
            &nbsp;Padi&nbsp;.
          </h1>
          <h1 className='uppercase text-white font-bold text-2xl'>
            &nbsp;Project Pop&nbsp;.
          </h1>
          <h1 className='uppercase text-white font-bold text-2xl'>
            &nbsp;Nassar&nbsp;.
          </h1>
        </Marquee>

        <Marquee speed={50}>
          {[Bernadya, Jkt48, Padi, Tandini, Ppop, Nassar].map((img, index) => (
            <div
              key={index}
              className='relative w-[182px] h-[240px] mx-2 mb-5 overflow-hidden'
            >
              <Image
                src={img}
                alt={`artist-${index}`}
                layout='fill'
                objectFit='cover'
              />
            </div>
          ))}
        </Marquee>

        <Marquee speed={40} direction='right'>
          {[Tandini, Ppop, Nassar, Bernadya, Jkt48, Padi].map((img, index) => (
            <div
              key={index}
              className='relative w-[182px] h-[240px] mx-2 mt-5 overflow-hidden'
            >
              <Image
                src={img}
                alt={`artist-${index}`}
                layout='fill'
                objectFit='cover'
              />
            </div>
          ))}
        </Marquee>

        <div className='px-6 lg:px-[144px] flex flex-col pt-[20px] pb-[40px] space-y-8'>
          <h1 className='text-white uppercase text-[44px] font-bold'>
            festival music
          </h1>
          <div className='flex justify-end'>
            <button className='border text-white border-white py-[11px] capitalize flex items-center px-[61.5px] space-x-2'>
              <p>Buy Ticket</p>
              <Image src={Arrow2} width={20.63} height={15} alt='arrow' className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
