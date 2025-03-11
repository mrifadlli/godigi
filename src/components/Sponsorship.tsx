import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Sponsor1 from "@/assets/sponsor1.png";
import Sponsor2 from "@/assets/sponsor2.png";
import Sponsor3 from "@/assets/sponsor3.png";
import Sponsor4 from "@/assets/sponsor4.png";
import Sponsor5 from "@/assets/sponsor5.png";
import Sponsor6 from "@/assets/sponsor6.png";

export default function Sponsorship() {
  return (
    <div className='h-full max-h-[480px] bg-white'>
      <div className='px-6 lg:px-[144px] mt-[110px]'>
        <h1 className='uppercase text-[40px] md:text-5xl font-extrabold'>
          sponsor and partner
        </h1>
      </div>

      <div className='mt-[65px] md:block hidden pb-[80px]'>
        <Marquee speed={50}>
          <Image className="mx-8" src={Sponsor1} width={299} height={81} alt='logo-sponsor' />
          <Image className="mx-8" src={Sponsor2} width={255} height={108} alt='logo-sponsor' />
          <Image className="mx-8" src={Sponsor3} width={212} height={108} alt='logo-sponsor' />
          <Image className="mx-8" src={Sponsor4} width={169} height={108} alt='logo-sponsor' />
          <Image className="mx-8" src={Sponsor5} width={270} height={108} alt='logo-sponsor' />
          <Image className="mx-8" src={Sponsor6} width={201} height={108} alt='logo-sponsor' />
        </Marquee>
      </div>

      <div className='mt-[65px] grid grid-cols-3 justify-items-center md:hidden pb-[80px]'>
        <Image src={Sponsor1} width={299} height={81} alt='logo-sponsor' />
        <Image src={Sponsor2} width={255} height={108} alt='logo-sponsor' />
        <Image src={Sponsor3} width={212} height={108} alt='logo-sponsor' />
        <Image src={Sponsor4} width={169} height={108} alt='logo-sponsor' />
        <Image src={Sponsor5} width={270} height={108} alt='logo-sponsor' />
        <Image src={Sponsor6} width={201} height={108} alt='logo-sponsor' />
      </div>
    </div>
  );
}
