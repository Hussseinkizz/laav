import { useStore } from 'hooks/useStore';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from 'react-icons/hi';
// import { useStore } from '../../hooks/useStore';

import sampleAvatar from '../../public/images/avatar.jpg';

type Props = {};

const AppBar = (props: Props) => {
  const {
    store: { darkmode },
    setStore,
  } = useStore();

  const toggleTheme = () => {
    setStore({ type: 'TOGGLE_THEME' });
  };

  return (
    <header className="w-full shadow-lg _bg-theme">
      <nav className="py-2 px-4">
        <div className="flex gap-4 items-center justify-between">
          {/* Nav Left */}
          <Link
            href="/profile"
            passHref
            className="flex gap-2 items-center justify-center ring ring-gray-100 rounded-full">
            <Image
              src={sampleAvatar}
              alt="foo"
              width={35}
              height={35}
              className="rounded-full w-full"
            />
          </Link>
          {/* Nav Middle */}
          <Link
            href="/"
            passHref
            className="flex gap-2 items-center justify-center  _text-theme--hoverable">
            <h1 className="font-bold text-xl md:text-2xl">Laav Dating</h1>
          </Link>
          {/* Nav Right */}
          <div className="flex gap-2 items-center justify-center">
            {/* <Icons.HiCog className="w-6 h-6 _text-theme--hoverable" /> */}
            <span className="flex">
              {darkmode ? (
                <Icons.HiMoon
                  className="w-6 h-6 _text-theme--hoverable"
                  onClick={toggleTheme}
                />
              ) : (
                <Icons.HiSun
                  className="w-6 h-6 _text-theme--hoverable"
                  onClick={toggleTheme}
                />
              )}
            </span>
            <Icons.HiBell className="w-6 h-6 _text-theme--hoverable" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
