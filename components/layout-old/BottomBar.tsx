import * as Icons from 'react-icons/hi';
import { useStore } from 'hooks/useStore';
import Link from 'next/link';

type Props = {};

const BottomBar = (props: Props) => {
  const {
    store: { darkmode },
    setStore,
  } = useStore();

  const toggleTheme = () => {
    setStore({ type: 'TOGGLE_THEME' });
  };
  return (
    <nav className="w-full shadow-lg _bg-theme py-2 px-4 flex gap-4 items-center justify-between">
      <Link href="/feeds" passHref className="flex">

        <Icons.HiHand className="w-6 h-6 _text-theme--hoverable" />

      </Link>
      <Link href="/audio-rooms" passHref className="flex">

        <Icons.HiCloud className="w-6 h-6 _text-theme--hoverable" />

      </Link>
      <Link
        href="/"
        passHref
        className="flex p-1 border-2 border-dashed border-gray-600 dark:border-gray-200 dark:hover:border-gray-400 transition ease-linear hover:border-gray-500 rounded-full">

        <Icons.HiHeart className="w-8 h-8 _text-theme--hoverable p-1 border-2 border-gray-600 dark:border-gray-200 dark:hover:border-gray-400 transition ease-linear hover:border-gray-500 rounded-full" />

      </Link>
      <Link href="/chat" passHref className="flex">

        <Icons.HiChat className="w-6 h-6 _text-theme--hoverable" />

      </Link>
      <Link href="/profile" passHref className="flex">

        <Icons.HiUser className="w-6 h-6 _text-theme--hoverable" />

      </Link>
    </nav>
  );
};

export default BottomBar;
