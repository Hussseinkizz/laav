import Image from 'next/image';
import React from 'react';

import sampleAvatar from '../public/img/monica.jpg';
type Props = {};

const SwipeCard = (props: Props) => {
  return (
    <div className="w-full min-h-[100%] shadow-lg rounded-lg relative">
      <div className="flex w-full h-[68vh] aspect-1 flex-auto">
        <Image
          src={sampleAvatar}
          alt="foo"
          fill
          className="group-hover:opacity-90 transition ease-linear rounded-lg w-full aspect-1"
        />
      </div>
    </div>
  );
};

export default SwipeCard;
