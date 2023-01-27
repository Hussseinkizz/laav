import React from 'react';
import * as Icons from 'react-icons/hi';

type Props = {};

const CardControls = (props: Props) => {
  return (
    <div className="absolute -bottom-[15%] bg-black dark:bg-opacity-80 bg-opacity-95 rounded-lg shadow-lg px-2 py-8 pb-10 w-full flex flex-col justify-around items-center gap-2 md:gap-4">
      <div className="flex w-full  justify-center items-center gap-2 md:gap-4 text-white mb-4">
        <Icons.HiShieldCheck className="w-6 h-6 text-indigo-500" />
        <h1 className="capitalize font-bold">Monica Halls</h1>
        <h2 className="foo">23</h2>
      </div>
      <div className="w-full flex justify-around items-center gap-2 md:gap-4">
        <Icons.HiRefresh className="w-6 h-6 text-gray-400" />
        <Icons.HiXCircle className="w-6 h-6 text-green-500" />
        <Icons.HiHeart className="w-6 h-6 text-red-500" />
        <Icons.HiFire className="w-6 h-6 text-yellow-500" />
        <Icons.HiStar className="w-6 h-6 text-purple-500" />
      </div>
    </div>
  );
};

export default CardControls;
