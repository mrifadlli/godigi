"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Logo from "@/assets/logo.png";
import LogoMob from "@/assets/digiland-black.svg";
import ID from "@/assets/id-icon.png";
import EN from "@/assets/en-icon.png";
import HamIcon from "@/assets/ham-icon.svg";
import CloseIcon from "@/assets/close-icon.png";

const navlink = [
  { name: "Beranda", link: "/" },
  { name: "About", link: "/about" },
  { name: "Pasar Rakyat", link: "/people-market" },
  { name: "Digital Run", link: "/digital-run" },
  { name: "Gallery", link: "/gallery" },
];

const lang = [
  { name: "id", img: ID },
  { name: "en", img: EN },
];

export const Navbar = () => {
  const [language, setLanguage] = useState("id");
  const [imgLang, setImgLang] = useState(ID);
  const [openLang, setOpenLang] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleLanguage = (items: { name: string; img: StaticImageData }) => {
    setLanguage(items.name);
    setImgLang(items.img);
  };

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <header className='w-full fixed z-50 bg-black/40'>
        <div className='flex justify-between items-center px-4 lg:px-[144px] h-[102px]'>
          <Image src={Logo} width={80} height={80} alt='logo' />

          <nav className='hidden lg:flex gap-10'>
            {navlink.map((items, index) => (
              <a
                key={index}
                href={items.link}
                className='uppercase text-white font-medium'
              >
                {items.name}
              </a>
            ))}

            <div className=''>
              <button
                onClick={() => setOpenLang(!openLang)}
                className='flex items-center justify-center gap-2 uppercase text-white cursor-pointer border w-[87px] h-[38px]'
              >
                {language}
                <Image src={imgLang} alt='flag' />
              </button>

              {openLang && (
                <div className='absolute mt-2'>
                  {lang.map((items, index) => (
                    <div key={index} className=''>
                      <button
                        onClick={() => {
                          handleLanguage(items)
                          setOpenLang(false)
                        }}
                        className='flex items-center justify-center gap-2 uppercase text-black hover:bg-white cursor-pointer w-[87px] h-[38px] bg-neutral-200'
                      >
                        {items.name}
                        <Image src={items.img} alt='flag' />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button onClick={handleNav} className='lg:hidden cursor-pointer'>
            <Image src={HamIcon} alt='menu' />
          </button>
        </div>
      </header>

      <div
        className={`fixed top-5 right-0 w-[80%] max-w-[390px] h-full bg-white 
          rounded-l-lg shadow-lg transform ${
            openNav ? "-translate-x-10" : "translate-x-full"
          } 
          transition-transform duration-300 z-50 flex flex-col`}
      >
        <div className='flex justify-between items-center p-6'>
          <Image src={LogoMob} width={80} height={80} alt='logo' />
          <button onClick={handleNav}>
            <Image src={CloseIcon} alt='close' />
          </button>
        </div>

        <nav className='flex flex-col gap-8 px-6 mt-10 text-lg font-medium'>
          {navlink.map((items, index) => (
            <a key={index} href={items.link} className='uppercase text-black'>
              {items.name}
            </a>
          ))}
          <div className='mt-auto'>
            <button
              onClick={() => setOpenLang(!openLang)}
              className='flex items-center justify-center gap-2 uppercase text-black border w-full h-[38px]'
            >
              {language}
              <Image src={imgLang} alt='flag' />
            </button>
          </div>

          {openLang && (
            <div className="-mt-2">
              {lang.map((items, index) => (
                <div key={index} className=''>
                  <button
                    onClick={() => {
                      handleLanguage(items)
                      handleNav()
                      setOpenLang(false)
                    }}
                    className='flex items-center justify-center gap-2 uppercase text-black hover:bg-white cursor-pointer w-full h-[38px] bg-neutral-200'
                  >
                    {items.name}
                    <Image src={items.img} alt='flag' />
                  </button>
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};
