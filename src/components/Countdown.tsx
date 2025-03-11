"use client";

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

interface CountdownProps {
  targetDate: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = dayjs();
    const difference = dayjs(targetDate).diff(now, "second");

    if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const formatNumber = (num: number) => String(num).padStart(2, "0");

    return {
      days: formatNumber(Math.floor(difference / (60 * 60 * 24))),
      hours: formatNumber(Math.floor((difference / (60 * 60)) % 24)),
      minutes: formatNumber(Math.floor((difference / 60) % 60)),
      seconds: formatNumber(difference % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center relative">
      <div className="flex flex-col justify-start space-y-5 lg:ml-80 text-center md:text-left px-6">
        <h1 className="text-[41px] italic text-left">
          {"Elevating"} {"Your "}
          <span className="text-amber-600">{"Joy"}</span>
        </h1>
        <p className="md:w-[680px] w-full text-lg text-left">
          Digiland is once again presenting as an immersive and interactive
          experience driven by innovation, happiness, connections, and spreading
          sustainable positive energy through technology, entertainment,
          empowerment, and community.
        </p>
      </div>

      <div className="relative mt-6">
        <div className="bg-[url('/bg-countdown.png')] bg-center bg-cover h-[399px] w-[1168px] relative"></div>

        <div className="absolute inset-0 flex justify-center items-center -mt-6 md:-mt-0">
          <div className="grid grid-cols-2 gap-8 md:flex md:space-x-10 text-white">
            <div className="text-center">
              <span className="text-5xl md:text-7xl font-bold">{timeLeft.days}</span>
              <span className="mt-5 block text-2xl md:text-4xl">HARI</span>
            </div>
            <div className="text-center">
              <span className="text-5xl md:text-7xl font-bold">{timeLeft.hours}</span>
              <span className="mt-5 block text-2xl md:text-4xl">JAM</span>
            </div>
            <div className="text-center">
              <span className="text-5xl md:text-7xl font-bold">{timeLeft.minutes}</span>
              <span className="mt-5 block text-2xl md:text-4xl">MENIT</span>
            </div>
            <div className="text-center">
              <span className="text-5xl md:text-7xl font-bold">{timeLeft.seconds}</span>
              <span className="mt-5 block text-2xl md:text-4xl">DETIK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
