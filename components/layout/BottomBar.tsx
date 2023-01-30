import * as Icons from "react-icons/hi";
import { RiMic2Fill, RiHeartPulseFill } from "react-icons/ri";
import { IoSparklesSharp } from "react-icons/io5";
import { useStore } from "hooks/useStore";
import Link from "next/link";

type Props = {};

const BottomBar = (props: Props) => {
  const {
    store: { darkmode },
    setStore,
  } = useStore();

  const toggleTheme = () => {
    setStore({ type: "TOGGLE_THEME" });
  };
  return (
    <nav className="_bg-theme flex w-full items-center justify-between gap-4 py-2 px-4 shadow-lg">
      <Link href="/feeds" passHref className="flex">
        <Icons.HiUsers className="_text-theme--hoverable h-6 w-6" />
      </Link>
      <Link href="/discover" passHref className="flex">
        <Icons.HiGift className="_text-theme--hoverable h-6 w-6" />
      </Link>
      <Link
        href="/"
        passHref
        className="flex rounded-full border-2 border-dashed border-gray-600 p-1 transition ease-linear hover:border-gray-500 dark:border-gray-200 dark:hover:border-gray-400"
      >
        <Icons.HiHeart className="_text-theme--hoverable h-8 w-8 rounded-full border-2 border-gray-600 p-1 transition ease-linear hover:border-gray-500 dark:border-gray-200 dark:hover:border-gray-400" />
      </Link>
      <Link href="/chat" passHref className="flex">
        <Icons.HiChat className="_text-theme--hoverable h-6 w-6" />
      </Link>
      <Link href="/likes" passHref className="flex">
        <IoSparklesSharp className="_text-theme--hoverable h-6 w-6" />
      </Link>
    </nav>
  );
};

export default BottomBar;
