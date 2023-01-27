import Image from "next/legacy/image";
import React, { useState } from "react";
import * as Icons from "react-icons/hi";

import sampleAvatar from "../public/samples/img9.jpeg";
type Props = {};

const SwipeCard = (props: Props) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  return (
    <div className="flex grow flex-col items-stretch justify-between overflow-hidden rounded-lg">
      <div className="group relative flex h-[450px] w-full grow cursor-pointer rounded-lg md:my-4">
        <Image
          src={sampleAvatar}
          loading="lazy"
          width={500}
          height={400}
          alt={`Image of someone`}
          className={`relative h-full w-full rounded-lg transition duration-300 ease-linear hover:scale-105 hover:opacity-90 group-hover:scale-110 group-hover:opacity-90 ${
            imageIsLoading
              ? "blur-3xl grayscale"
              : "blur-0 grayscale-0 transition-all duration-300 ease-in-out"
          }`}
          onLoadingComplete={() => setImageIsLoading(false)}
        />
        {/* The Overlay Content */}
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-between">
          {/* Top Overlay */}
          <div className="flex w-full flex-col items-center justify-start gap-4 p-4 text-sm text-slate-200">
            <div className="flex w-full items-center justify-between gap-4">
              {/* Distance */}
              <div className="flex  w-full items-center justify-center gap-2 md:gap-4">
                <Icons.HiMap className="h-6 w-6 text-fuchsia-500" />
                <h2 className="font-bold capitalize">3 Km Away</h2>
              </div>
              {/* Uptime Status */}
              <div className="flex  w-full items-center justify-center gap-2 md:gap-4">
                <Icons.HiOutlineWifi className="h-6 w-6 text-purple-500" />
                <h2 className="foo">Active!</h2>
              </div>
            </div>
          </div>
          {/* Bottom Overlay */}
          <div className="flex w-full flex-col items-center justify-end gap-4 bg-opacity-80 bg-gradient-to-t  from-black via-black/60 to-black/5 py-4 px-16 pt-6">
            <div className="flex w-full  flex-col items-center justify-center gap-2">
              <div className="flex  w-full items-center justify-between gap-4 text-white">
                {/* Name & Verification */}
                <div className="flex items-center justify-center gap-2">
                  <Icons.HiShieldCheck className="h-6 w-6 text-indigo-500" />
                  <h1 className="text-2xl font-bold capitalize">Natlie</h1>
                </div>
                {/* Age */}
                <h1 className="text-2xl font-semibold"> 23</h1>
              </div>
            </div>
            {/* The Controls */}
            <div className="flex w-full items-center justify-between gap-4">
              <button className="flex items-center justify-center gap-1 rounded-full bg-rose-400 p-2 capitalize text-rose-50 transition duration-150 ease-in-out hover:bg-rose-200 hover:text-rose-400 hover:shadow-md hover:shadow-rose-500 active:scale-95">
                <Icons.HiX className="h-6 w-6" />
              </button>
              <button className="flex items-center justify-center gap-1 rounded-full bg-amber-400 p-2 capitalize text-amber-50 transition duration-150 ease-in-out hover:bg-amber-200 hover:text-amber-400 hover:shadow-md hover:shadow-amber-500 active:scale-95">
                <Icons.HiStar className="h-6 w-6" />
              </button>
              <button className="flex items-center justify-center gap-1 rounded-full bg-green-400 p-2 capitalize text-green-50 transition duration-150 ease-in-out hover:bg-green-200 hover:text-green-400 hover:shadow-md hover:shadow-green-500 active:scale-95">
                <Icons.HiOutlineHeart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;
