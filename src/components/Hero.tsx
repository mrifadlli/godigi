import React from 'react'
import Marquee from "react-fast-marquee";

export const Hero = () => {
  return (
    <div className='min-h-screen h-full w-full'>
          <div className='relative bg-black'>
            <div className="h-screen bg-[url('/hero-mob.png')] md:bg-[url('/hero.png')] bg-cover bg-center"></div>
            <div className="absolute bottom-0 bg-[url('/sub-bgHero-mob.png')] md:bg-[url('/hero-frame.png')] h-full inset-0 bg-cover bg-center z-30"></div>
          </div>

          <div className='absolute mb-14 md:mb-0 bottom-1/2 w-full'>
            <Marquee className='bg-transparent flex gap-20 overflow-hidden'>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
              <div className='px-8 md:px-16'>
                <p className='text-4xl md:text-8xl font-bold text-white'>
                  DIGILAND 2025
                </p>
              </div>
            </Marquee>
          </div>

          <div className='absolute bottom-20 z-99 px-6 lg:px-[144px]'>
            <p className='text-xl md:text-2xl text-white w-full md:w-[610px]'>
              Digiland 2025 is signature annual event Telkom Indonesia, bringing
              inspiring, innovative, and entertaining.
            </p>
            <br />
            <p className='text-xl md:text-2xl text-white w-full md:w-[610px]'>
              The spirit of #ElevatingYourFuture continues through Digiland Run,
              Digiland Music, and Pasar Rakyat UMKM.
            </p>
          </div>
        </div>
  )
}
