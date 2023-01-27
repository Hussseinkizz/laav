import { useStore } from 'hooks/useStore';
import Link from 'next/link';
import * as Icons from 'react-icons/hi';
// import { useStore } from '../../hooks/useStore';

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
            href="/"
            passHref
            className="flex gap-2 items-center justify-center  _text-theme--hoverable">

            <Icons.HiFire className="w-6 h-6" />
            <h1 className="font-bold text-lg">Laav</h1>

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
