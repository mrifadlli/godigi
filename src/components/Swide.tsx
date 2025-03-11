import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Swide() {
  return (
    <div className="h-screen bg-[url('/swide.png')] bg-cover bg-center relative">
      <div className='absolute bottom-1/3 left-1/2 -translate-x-1/2 -translatey1/2'>
        <Image
          src={Logo}
          alt='logo'
          className='w-[249px] h-[181px] md:w-[303px] md:h-[221px]'
        />
      </div>
    </div>
  );
}
