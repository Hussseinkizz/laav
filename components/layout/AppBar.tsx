import { useStore } from "hooks/useStore";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "react-icons/hi";
// import { useStore } from '../../hooks/useStore';

import sampleAvatar from "../../public/images/avatar.jpg";

type Props = {};

const AppBar = (props: Props) => {
  const {
    store: { darkmode },
    setStore,
  } = useStore();

  const toggleTheme = () => {
    setStore({ type: "TOGGLE_THEME" });
  };

  return (
    <header className="_bg-theme w-full shadow-lg">
      <nav className="py-2 px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Nav Left */}
          <Link
            href="/profile"
            passHref
            className="flex items-center justify-center gap-2 rounded-full ring ring-gray-100"
          >
            <Image
              src={sampleAvatar}
              alt="foo"
              width={35}
              height={35}
              className="w-full rounded-full"
            />
          </Link>
          {/* Nav Middle */}
          <Link
            href="/"
            passHref
            className="_text-theme--hoverable flex items-center justify-center  gap-2"
          >
            <h1 className="bg-gradient-to-r from-rose-400  via-fuchsia-500 to-indigo-500 bg-clip-text text-2xl font-semibold text-transparent md:text-2xl">
              Laav Dating
            </h1>
          </Link>
          {/* Nav Right */}
          <div className="flex items-center justify-center gap-2">
            {/* <Icons.HiCog className="w-6 h-6 _text-theme--hoverable" /> */}
            <span className="flex">
              {darkmode ? (
                <Icons.HiMoon
                  className="_text-theme--hoverable h-6 w-6"
                  onClick={toggleTheme}
                />
              ) : (
                <Icons.HiSun
                  className="_text-theme--hoverable h-6 w-6"
                  onClick={toggleTheme}
                />
              )}
            </span>
            <Icons.HiBell className="_text-theme--hoverable h-6 w-6" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
