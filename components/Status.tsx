import Image from 'next/legacy/image';
import * as Icons from 'react-icons/hi';
type Props = {};

import sampleAvatar from '../public/images/avatar.jpg';

const Status = (props: Props) => {
  return (
    <div className="w-full flex flex-auto mb-4 gap-2 md:gap-4 justify-around items-center">
      <span className="flex  shadow-md hover:shadow-lg rounded-full _surface-theme p-2">
        <Icons.HiPlus className="w-12 h-12 _text-theme--hoverable p-1 border-2 border-gray-600 dark:border-gray-200 dark:hover:border-gray-400 transition ease-linear hover:border-gray-500 rounded-full" />
      </span>
      <span className="flex group  shadow-md rounded-full _surface-theme ring-1 ring-pink-500 hover:ring-pink-400 transition ease-linear active:scale-90 hover:shadow-lg">
        <Image
          src={sampleAvatar}
          alt="foo"
          width={60}
          height={60}
          className="group-hover:opacity-90 transition ease-linear rounded-full w-full"
        />
      </span>
      <span className="flex group  shadow-md rounded-full _surface-theme ring-1 ring-pink-500 hover:ring-pink-400 transition ease-linear active:scale-90 hover:shadow-lg">
        <Image
          src={sampleAvatar}
          alt="foo"
          width={60}
          height={60}
          className="group-hover:opacity-90 transition ease-linear rounded-full w-full"
        />
      </span>
      <span className="flex group  shadow-md rounded-full _surface-theme ring-1 ring-pink-500 hover:ring-pink-400 transition ease-linear active:scale-90 hover:shadow-lg">
        <Image
          src={sampleAvatar}
          alt="foo"
          width={60}
          height={60}
          className="group-hover:opacity-90 transition ease-linear rounded-full w-full"
        />
      </span>
      <span className="flex group  shadow-md rounded-full _surface-theme ring-1 ring-pink-500 hover:ring-pink-400 transition ease-linear active:scale-90 hover:shadow-lg">
        <Image
          src={sampleAvatar}
          alt="foo"
          width={60}
          height={60}
          className="group-hover:opacity-90 transition ease-linear rounded-full w-full"
        />
      </span>
    </div>
  );
};

export default Status;
