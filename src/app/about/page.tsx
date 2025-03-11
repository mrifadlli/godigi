import React from "react";
import DefaultLayout from "@/components/DefaultLayout";
import Sponsorship from "@/components/Sponsorship";
import { GetTicket } from "@/components/GetTicket";

export default function page() {
  return (
    <DefaultLayout>
      <>
        <section className="flex relative flex-col pb-20 w-full text-white min-h-[540px] max-md:max-w-full bg-[url('/bg-footer.png')] bg-center bg-cover">
          <div className='w-full max-w-6xl mx-auto mt-auto pb-24 max-lg:px-5 relative z-10 h-fit'>
            <div className='text-white font-bold text-[44px] max-sm:text-[24px] uppercase leading-none'>
              ABOUT
            </div>
            <div className='text-white font-clash text-[72px] max-sm:text-[40px] max-sm:pt-4 max-sm:pb-2 font-bold uppercase'>
              DIGILAND
              <span className='font-normal'> 2025</span>
            </div>
            <div className='text-white font-clash text-[20px] max-sm:text-[16px] font-bold uppercase'>
              SUNDAY, MAY 18 2025 &nbsp;&nbsp; ⎯ &nbsp;&nbsp; ISTORA SENAYAN
              JAKARTA
            </div>
          </div>
        </section>
        <section className="relative bg-no-repeat bg-left-top bg-[url('/background/about-section2.png')] pt-[82px]">
          <div className="w-full max-lg:px-5 bg-no-repeat bg-right bg-[url('/background/about-section3.png')]">
            <div className='flex max-lg:flex-col w-full max-w-6xl mx-auto pb-[120px]'>
              <div className='max-sm:w-full lg:basis-2/6 max-lg:mb-8'>
                <div className='text-[#333] font-telkom text-[40.6px] max-sm:text-[32px] font-normal italic leading-[65px] capitalize'>
                  ElevatingYour
                  <span className='text-[#D90000] font-script text-[63.4px] italic leading-[65px] capitalize'>
                    Joy
                  </span>
                </div>
              </div>

              <div className='max-sm:w-full lg:basis-4/6'>
                <div className='text-[#333] font-telkom text-[16px] font-normal leading-[34px] max-sm:leading-[27px]'>
                  #DIGILAND2025 emerges as Telkom Indonesia&apos;s signature
                  annual event. Embracing the spirit of #ElevatingYourFuture,
                  this year&apos;s event offers an immersive experience
                  supported by advanced technology, combining the empowerment of
                  MSMEs as economic drivers and sustainability initiatives
                  through innovation.
                  <br />
                  <br />
                  The entire series of Digiland events is designed to entertain
                  the public while providing tangible impacts for business
                  actors across various sectors. This year, #DIGILAND2025 will
                  be held on May 18, 2025, at Istora Senayan Jakarta, featuring
                  exciting experiences such as:
                </div>
                <div className='flex max-sm:flex-col mt-10 gap-6'>
                  <div className='max-sm:w-full lg:basis-1/3'>
                    <div className='text-[#333] font-clash text-xl font-semibold'>
                      Pasar Rakyat UMKM
                    </div>
                    <div className='text-[#333] font-telkom text-[16px] font-normal leading-[27px] mt-3'>
                      As a form of commitment to support local businesses,
                      Digiland once again dozens of MSME tenants in the MSME
                      People’s Market.
                    </div>
                  </div>
                  <div className='max-sm:w-full lg:basis-1/3'>
                    <div className='text-[#333] font-clash text-xl font-semibold'>
                      Digiland Run
                    </div>
                    <div className='text-[#333] font-telkom text-[16px] font-normal leading-[27px] mt-3'>
                      Welcoming running enthusiasts from across Indonesia and
                      beyond to experience the joy of Digiland Run—an offline
                      race with 5K, 10K, and Half Marathon (21K) distance
                      options.
                    </div>
                  </div>
                  <div className='max-sm:w-full lg:basis-1/3'>
                    <div className='text-[#333] font-clash text-xl font-semibold'>
                      Digiland Music
                    </div>
                    <div className='text-[#333] font-telkom text-[16px] font-normal leading-[27px] mt-3'>
                      Experience pure joy at Digiland with electrifying
                      performances from amazing musicians!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GetTicket />
        <Sponsorship />
      </>
    </DefaultLayout>
  );
}
