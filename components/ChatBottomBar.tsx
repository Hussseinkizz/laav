import Image from "next/image";
import Link from "next/link";
import * as Icons from "react-icons/hi";

import sampleAvatar from "../public/images/avatar.jpg";

type Props = {};

const ChatBottomBar = (props: Props) => {
  const handleTyping = () => {
    //
  };
  return (
    <header className="_bg-theme w-full shadow-lg">
      <nav className="py-2 px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Nav Left */}
          <div className="group relative flex grow items-center justify-between rounded-lg">
            {/* The Emoji Icon */}
            <div className="absolute left-4 z-10 text-gray-400">
              <Icons.HiEmojiHappy className="h-6 w-6 cursor-pointer transition hover:text-fuchsia-200" />
            </div>
            {/* The Input */}
            <input
              type="text"
              placeholder="..."
              onChange={handleTyping}
              className="relative grow  truncate rounded-lg border-transparent bg-gray-100 px-12 outline-none ring-1 ring-fuchsia-100 transition-colors hover:bg-gray-50 hover:ring-2 hover:ring-fuchsia-100 focus:border-fuchsia-100  focus:outline-none focus:ring-2 focus:ring-fuchsia-100 group-hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:ring-fuchsia-800 dark:hover:bg-gray-800 dark:hover:ring-fuchsia-800 dark:focus:border-fuchsia-800 dark:focus:ring-fuchsia-800 group-hover:dark:hover:bg-gray-800"
            />
            {/* The gift Icon */}
            <div className="absolute right-4 text-gray-400">
              <Icons.HiGift className="h-6 w-6 cursor-pointer transition hover:text-fuchsia-200" />
            </div>
          </div>
          {/* Nav Right */}
          <div className="flex items-center justify-center gap-2">
            <Icons.HiPaperAirplane className="_text-theme--hoverable h-6 w-6 rotate-90" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ChatBottomBar;
